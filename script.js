const resourcesData = {
  unit1: {
    "tutorial-videos": [
      `<a href="https://www.youtube.com/watch?v=3JluqTojuME" target="_blank">Video 1: Microsoft Word Basics</a>`,
      `<a href="https://www.youtube.com/watch?v=RvbWbPmUx1M" target="_blank">Video 2: Excel Advanced</a>`,
      `<a href="https://www.youtube.com/watch?v=qRS7TmvYc30" target="_blank">Video 3: PowerPoint Skills</a>`,
      `<a href="https://www.youtube.com/watch?v=0qeJepQXYfo" target="_blank">Video 4: Database Design</a>`,
      `<a href="https://www.youtube.com/watch?v=U3aXWizDbQ4" target="_blank">Video 5: Advanced Email Techniques</a>`
    ],
    "tests": [
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Test 1: Basics</a>`,
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Test 2: Advanced</a>`,
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Test 3: Applied Skills</a>`,
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Test 4: Capstone</a>`
    ],
    "pdf-notes": [
      `<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">PDF 1: Word Notes</a>`,
      `<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">PDF 2: Excel Notes</a>`,
      `<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">PDF 3: PowerPoint Notes</a>`
    ],
    "homework": [
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Homework 1: Practice Workbook</a>`,
      `<a href="https://www.classmarker.com/online-test/start/" target="_blank">Homework 2: Case Studies</a>`
    ],
    "practice-questions": [
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 1</a>`,
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 2</a>`,
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 3</a>`,
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 4</a>`,
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 5</a>`,
      `<a href="https://www.geeksforgeeks.org" target="_blank">Question Set 6</a>`
    ]
  },
  unit2: {
    // Similar structure as unit1, with custom content
  },
  unit3: {
    // Similar structure as unit1, with custom content
  },
  unit4: {
    // Similar structure as unit1, with custom content
  },
  unit5: {
    // Similar structure as unit1, with custom content
  }
};

function displayResources(selectElement, unitId) {
  const selectedResource = selectElement.value;
  const resourceList = document.getElementById(`${unitId}-resources`);

  if (selectedResource && resourcesData[unitId][selectedResource]) {
    const items = resourcesData[unitId][selectedResource]
      .map((item) => `<li>${item}</li>`)
      .join("");

    resourceList.innerHTML = `
      <h4>${selectElement.options[selectElement.selectedIndex].text}</h4>
      <ul>${items}</ul>
    `;
  } else {
    resourceList.innerHTML = "<p>No resources available</p>";
  }
}
