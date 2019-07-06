declare module "@capacitor/core" {
  interface PluginRegistry {
    Album: AlbumPlugin;
  }
}

export interface AlbumPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
