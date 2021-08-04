import { Tree } from '@nrwl/devkit';
import { updateJson } from '@nrwl/devkit';
import { GeneratorOptions } from './schema';

export default async function (tree: Tree, schema: GeneratorOptions) {
  updateJson(tree, 'workspace.json', wsJson => {
    const project = wsJson.projects[schema.name];

    if (!project) {
      console.log('You entered the wrong name.');
      return wsJson;
    }

    const targets = project.targets ?? {};

    const generate = {
      builder: '@nrwl/workspace:run-commands',
      options: {
        commands: [
          {
            command: 'npx graphql-codegen --config libs/bookmark/data-access-bookmark/codegen.yml',
          },
        ],
      },
    };

    wsJson.projects[schema.name].targets = { ...targets, generate };
    return wsJson;
  });
}
