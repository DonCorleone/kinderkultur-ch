import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'kinderkultur-ch',
  distFolder: './dist/kinderkultur-ch', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/spielgruppe/:id': {
      serverTimeout: 300000,
      type: 'json',
      id: {
        url: 'https://kinderkultur.ch/spielgruppe',
        property: '_id',
      },
    },
  }
};
