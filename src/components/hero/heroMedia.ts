/**
 * Shared media shape for hero components. Only "image" is populated today —
 * the repo has no raw video asset (video.youtubeId elsewhere is a YouTube
 * embed, not a file suitable for a silent autoplaying background). Swapping
 * the home hero to video later means setting homeHeroMedia to the "video"
 * variant below; HomeHero already renders either shape.
 */
export type HeroMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };
