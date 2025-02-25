const useCategoryCount = (course) => {
  const categoryCounts = course.reduce((counts, course) => {
    counts[course.category] = (counts[course.category] || 0) + 1;
    return counts;
  }, {});

  return { categoryCounts };
};

export default useCategoryCount;
