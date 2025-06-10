// menu-verification.js
// Script to verify all menu items are correctly included in the template

import menuDataSource from './menu_data.js';
import { menuData as menuTemplate } from './menu-template.js';

// Color codes for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m',
  blue: '\x1b[34m',
};

function logSuccess(message) {
  console.log(`${colors.green}✓${colors.reset} ${message}`);
}

function logError(message) {
  console.log(`${colors.red}✗${colors.reset} ${message}`);
}

function logWarning(message) {
  console.log(`${colors.yellow}⚠${colors.reset} ${message}`);
}

function logInfo(message) {
  console.log(`${colors.blue}ℹ${colors.reset} ${message}`);
}

// Extract all items from source data
function getSourceItems() {
  const sourceItems = menuDataSource.items || [];
  return sourceItems.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    category: item.category,
    description: item.description,
    dietary: item.dietary || [],
    image: item.image,
  }));
}

// Extract all items from template
function getTemplateItems() {
  const templateItems = [];

  menuTemplate.categories.forEach(category => {
    category.items.forEach(item => {
      templateItems.push({
        id: item.id,
        name: item.name,
        price: item.price,
        category: category.id,
        description: item.description,
        dietary: item.dietary || {},
        image: item.image,
      });
    });
  });

  // Add combo items
  if (menuTemplate.combos) {
    menuTemplate.combos.forEach(combo => {
      templateItems.push({
        id: combo.id,
        name: combo.name,
        price: combo.price,
        category: 'combos',
        description: combo.description,
        dietary: combo.dietary || {},
        image: combo.image,
      });
    });
  }

  return templateItems;
}

// Main verification function
function verifyMenuCompleteness() {
  console.log('\n=== Menu Verification Report ===\n');

  const sourceItems = getSourceItems();
  const templateItems = getTemplateItems();

  logInfo(`Source items count: ${sourceItems.length}`);
  logInfo(`Template items count: ${templateItems.length}`);
  console.log('');

  // Track verification results
  const results = {
    missing: [],
    priceMismatch: [],
    categoryMismatch: [],
    duplicates: [],
    syntaxIssues: [],
    dietaryIssues: [],
  };

  // Check each source item exists in template
  sourceItems.forEach(sourceItem => {
    const templateItem = templateItems.find(t => t.id === sourceItem.id);

    if (!templateItem) {
      results.missing.push(sourceItem);
    } else {
      // Check price match
      if (sourceItem.price !== templateItem.price) {
        results.priceMismatch.push({
          item: sourceItem.name,
          source: sourceItem.price,
          template: templateItem.price,
        });
      }

      // Check category match
      if (sourceItem.category !== templateItem.category) {
        results.categoryMismatch.push({
          item: sourceItem.name,
          source: sourceItem.category,
          template: templateItem.category,
        });
      }

      // Check dietary conversion
      if (Array.isArray(sourceItem.dietary) && typeof templateItem.dietary === 'object') {
        // Verify halal flag is set correctly
        if (sourceItem.dietary.includes('Halal') && !templateItem.dietary.halal) {
          results.dietaryIssues.push({
            item: sourceItem.name,
            issue: 'Halal flag not set',
          });
        }
        if (sourceItem.dietary.includes('Vegetarian') && !templateItem.dietary.vegetarian) {
          results.dietaryIssues.push({
            item: sourceItem.name,
            issue: 'Vegetarian flag not set',
          });
        }
      }
    }
  });

  // Check for duplicates in template
  const idCounts = {};
  templateItems.forEach(item => {
    idCounts[item.id] = (idCounts[item.id] || 0) + 1;
  });

  Object.entries(idCounts).forEach(([id, count]) => {
    if (count > 1) {
      results.duplicates.push({ id, count });
    }
  });

  // Check for items in template not in source
  const extraItems = templateItems.filter(
    templateItem => !sourceItems.find(s => s.id === templateItem.id)
  );

  // Report results
  console.log('=== Verification Results ===\n');

  if (results.missing.length === 0) {
    logSuccess('All source items are present in template');
  } else {
    logError(`Missing items: ${results.missing.length}`);
    results.missing.forEach(item => {
      console.log(`  - ${item.name} (${item.category}) - $${item.price}`);
    });
  }

  console.log('');

  if (results.priceMismatch.length === 0) {
    logSuccess('All prices match');
  } else {
    logError(`Price mismatches: ${results.priceMismatch.length}`);
    results.priceMismatch.forEach(mismatch => {
      console.log(`  - ${mismatch.item}: $${mismatch.source} → $${mismatch.template}`);
    });
  }

  console.log('');

  if (results.categoryMismatch.length === 0) {
    logSuccess('All categories match');
  } else {
    logWarning(`Category mismatches: ${results.categoryMismatch.length}`);
    results.categoryMismatch.forEach(mismatch => {
      console.log(`  - ${mismatch.item}: ${mismatch.source} → ${mismatch.template}`);
    });
  }

  console.log('');

  if (results.duplicates.length === 0) {
    logSuccess('No duplicate IDs found');
  } else {
    logError(`Duplicate IDs: ${results.duplicates.length}`);
    results.duplicates.forEach(dup => {
      console.log(`  - ${dup.id} appears ${dup.count} times`);
    });
  }

  console.log('');

  if (results.dietaryIssues.length === 0) {
    logSuccess('All dietary flags properly converted');
  } else {
    logWarning(`Dietary conversion issues: ${results.dietaryIssues.length}`);
    results.dietaryIssues.forEach(issue => {
      console.log(`  - ${issue.item}: ${issue.issue}`);
    });
  }

  console.log('');

  if (extraItems.length > 0) {
    logInfo(`Items in template not in source: ${extraItems.length}`);
    extraItems.forEach(item => {
      console.log(`  - ${item.name} (${item.category})`);
    });
  }

  // Category summary
  console.log('\n=== Category Summary ===\n');
  const categoryCounts = {};
  templateItems.forEach(item => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  Object.entries(categoryCounts).sort().forEach(([category, count]) => {
    console.log(`${category}: ${count} items`);
  });

  // Final summary
  console.log('\n=== Final Summary ===\n');
  const totalIssues =
    results.missing.length +
    results.priceMismatch.length +
    results.duplicates.length +
    results.dietaryIssues.length;

  if (totalIssues === 0) {
    logSuccess('Menu verification passed! All items are correctly included.');
  } else {
    logError(`Found ${totalIssues} issues that need attention.`);
  }

  // Check for syntax issues
  console.log('\n=== Syntax Check ===\n');
  try {
    JSON.stringify(menuTemplate);
    logSuccess('Menu template has valid JSON structure');
  } catch (error) {
    logError('Menu template has circular references or invalid structure');
    console.log(`  Error: ${error.message}`);
  }

  // Check required fields
  let missingFields = false;
  menuTemplate.categories.forEach(category => {
    category.items.forEach(item => {
      const requiredFields = ['id', 'name', 'price', 'dietary'];
      requiredFields.forEach(field => {
        if (!item.hasOwnProperty(field)) {
          if (!missingFields) {
            logError('Missing required fields:');
            missingFields = true;
          }
          console.log(`  - ${item.name || 'Unknown'} missing field: ${field}`);
        }
      });
    });
  });

  if (!missingFields) {
    logSuccess('All items have required fields');
  }
}

// Run verification
verifyMenuCompleteness();
