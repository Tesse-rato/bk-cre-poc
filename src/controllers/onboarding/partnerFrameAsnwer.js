module.exports = function addPartner(headers, body) {
  return new Promise((resolve, reject) => {
    try {
      const
        sectionIndex = body.sections.findIndex(section => section.type === 'header'),
        section = body.sections[sectionIndex],
        childrenIndex = section.childrens.findIndex(section => section.id === 'question'),
        children = section.childrens[childrenIndex];

      if (!section) return reject({ message: 'No section Found' }, 404);
      if (!children) return reject({ message: 'No children Found' }, 404);

      body
        .sections[sectionIndex]
        .ableToContinue = body
          .sections[sectionIndex]
          .childrens[childrenIndex]
          .value || false;

      resolve(body);

    } catch (err) {
      console.error(err)
      reject(err, 500);
    }
  });
}

