const combineClasses = (...args) => {
  const classNames = args.filter((item) => {
    if (typeof item === 'boolean') return false;
    if (!item) return false;
    return item.trim();
  });
  return classNames.join(' ');
};

export default combineClasses;
