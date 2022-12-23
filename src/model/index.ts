const PATH_REG = /.*-([a-zA-Z_]+?)\.ts$/;

function getModules(context: Record<string, AppItem[]>): CateItem[] {
  const sortList = [
    'community',
    'FRAMEWORK',
    'UI/DESIGN',
    'LIBRARY',
    'NODEJS',
    'BUILD',
    'HTML/CSS',
    'WEBSITE',
    'OTHER',
    'LOWCODE',
  ];
  const arr: CateItem[] = [];
  Object.keys(context).forEach((path: string) => {
    const title = path.replace(PATH_REG, (_, $1) => $1.replace('_', '/'));
    arr[
      sortList
        .map(i => i.toLocaleUpperCase())
        .indexOf(title.toLocaleUpperCase())
    ] = {
      title,
      children: context[path],
    };
  });
  return arr;
}

const context: Record<string, AppItem[]> = import.meta.importGlob(
  './modules/*.ts',
  {
    eager: true,
    import: 'default',
  }
);

export default <CateItem[]>getModules(context);
