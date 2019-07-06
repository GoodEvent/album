import { WebPlugin } from '@capacitor/core';
import { AlbumPlugin } from './definitions';

export class AlbumWeb extends WebPlugin implements AlbumPlugin {
  constructor() {
    super({
      name: 'Album',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Album = new AlbumWeb();

export { Album };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Album);
