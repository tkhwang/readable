import {
  Tree,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { GeneratorOptions } from './schema';
import { updateJson } from '@nrwl/devkit';

export default async function (tree: Tree, schema: GeneratorOptions) {
  await libraryGenerator(tree, { name: schema.name });

  if (schema.type === 'data-access') {
    const libraryRoot = readProjectConfiguration(tree, schema.name).root;
    generateFiles(
      tree, // the virtual file system
      joinPathFragments(__dirname, './files'), // path to the file templates
      libraryRoot, // destination path of the files
      schema // config object to replace variable in file templates
    );
  }

  await formatFiles(tree);

  updateJson(tree, 'apps/client/tsconfig.json', wsJson => {
    const index = schema.name.indexOf('-', 0);
    const dir = schema.name.substring(0, index);
    const name = schema.name.substring(index + 1);

    const key = `@readable/${dir}/${name}`;
    const value = [`libs/${dir}/${name}/src/index.ts`];

    wsJson.compilerOptions.paths = wsJson.compilerOptions.paths ?? {};
    wsJson.compilerOptions.paths[key] = value;

    return wsJson;
  });

  return () => {
    installPackagesTask(tree);
  };
}
