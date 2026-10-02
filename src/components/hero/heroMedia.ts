/** Shared media shape for hero components — either a still image or a silent autoplaying background video. */
export type HeroMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };
