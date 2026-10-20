// Project photo registry. Each entry is one project; `photos` holds every
// published photo for that project, with the cover first. Photos are optimized
// WebP: `sm` is for grid cards and thumbnails, `lg` for the lightbox, featured
// tiles and before/after sliders.
// Alt text and stage labels describe only what is visible in each photo.
// Titles describe visible features; do not add locations, client names or
// work details that are not in the source photos.
import exteriorAfterPinkPhoto from "../../assets/images/projects/exterior-after-pink.webp";
import interiorBrightFinishedPhoto from "../../assets/images/projects/interior-bright-finished.webp";
import cabinetsSageGreenPhoto from "../../assets/images/projects/cabinets-sage-green.webp";
import exteriorAfterWhitePhoto from "../../assets/images/projects/exterior-after-white.webp";
import kitchenBlueAccentPhoto from "../../assets/images/projects/kitchen-blue-accent.webp";
import porchYellowDoorPhoto from "../../assets/images/projects/porch-yellow-door.webp";
import exteriorInProgressPhoto from "../../assets/images/projects/exterior-in-progress.webp";
import interiorEmptyRoomPhoto from "../../assets/images/projects/interior-empty-room.webp";
import shingleSidingSideDeckSm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-side-deck-sm.webp";
import shingleSidingSideDeckLg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-side-deck-lg.webp";
import shingleSidingHydrangeaSideSm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-hydrangea-side-sm.webp";
import shingleSidingHydrangeaSideLg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-hydrangea-side-lg.webp";
import shingleSidingPaintSprayerSm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-paint-sprayer-sm.webp";
import shingleSidingPaintSprayerLg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-paint-sprayer-lg.webp";
import shingleSidingBeforeSideSm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-before-side-sm.webp";
import shingleSidingBeforeSideLg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-before-side-lg.webp";
import whiteKitchenIslandStoolsSm from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-stools-sm.webp";
import whiteKitchenIslandStoolsLg from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-stools-lg.webp";
import whiteKitchenWideViewSm from "../../assets/images/projects/white-kitchen-island/white-kitchen-wide-view-sm.webp";
import whiteKitchenWideViewLg from "../../assets/images/projects/white-kitchen-island/white-kitchen-wide-view-lg.webp";
import whiteKitchenWindowSinkSm from "../../assets/images/projects/white-kitchen-island/white-kitchen-window-sink-sm.webp";
import whiteKitchenWindowSinkLg from "../../assets/images/projects/white-kitchen-island/white-kitchen-window-sink-lg.webp";
import whiteKitchenBeforeSinkSm from "../../assets/images/projects/white-kitchen-island/white-kitchen-before-sink-sm.webp";
import whiteKitchenBeforeSinkLg from "../../assets/images/projects/white-kitchen-island/white-kitchen-before-sink-lg.webp";
import vaultedLivingRoomGreenWallsSm from "../../assets/images/projects/green-living-room-orange-entry/vaulted-living-room-green-walls-sm.webp";
import vaultedLivingRoomGreenWallsLg from "../../assets/images/projects/green-living-room-orange-entry/vaulted-living-room-green-walls-lg.webp";
import greenKitchenIslandStoolsSm from "../../assets/images/projects/green-living-room-orange-entry/green-kitchen-island-stools-sm.webp";
import greenKitchenIslandStoolsLg from "../../assets/images/projects/green-living-room-orange-entry/green-kitchen-island-stools-lg.webp";
import greenLivingRoomFireplaceSm from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-fireplace-sm.webp";
import greenLivingRoomFireplaceLg from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-fireplace-lg.webp";
import orangeEntryCoatRackSm from "../../assets/images/projects/green-living-room-orange-entry/orange-entry-coat-rack-sm.webp";
import orangeEntryCoatRackLg from "../../assets/images/projects/green-living-room-orange-entry/orange-entry-coat-rack-lg.webp";
import entryBeforeCoatRackSm from "../../assets/images/projects/green-living-room-orange-entry/entry-before-coat-rack-sm.webp";
import entryBeforeCoatRackLg from "../../assets/images/projects/green-living-room-orange-entry/entry-before-coat-rack-lg.webp";
import vaultedLivingRoomBeforeSm from "../../assets/images/projects/green-living-room-orange-entry/vaulted-living-room-before-sm.webp";
import vaultedLivingRoomBeforeLg from "../../assets/images/projects/green-living-room-orange-entry/vaulted-living-room-before-lg.webp";
import staircaseRunnerRugEntrySm from "../../assets/images/projects/staircase-and-hallway/staircase-runner-rug-entry-sm.webp";
import staircaseRunnerRugEntryLg from "../../assets/images/projects/staircase-and-hallway/staircase-runner-rug-entry-lg.webp";
import staircaseWhiteRailingUpperSm from "../../assets/images/projects/staircase-and-hallway/staircase-white-railing-upper-sm.webp";
import staircaseWhiteRailingUpperLg from "../../assets/images/projects/staircase-and-hallway/staircase-white-railing-upper-lg.webp";
import staircaseBeforeRugSm from "../../assets/images/projects/staircase-and-hallway/staircase-before-rug-sm.webp";
import staircaseBeforeRugLg from "../../assets/images/projects/staircase-and-hallway/staircase-before-rug-lg.webp";
import staircaseBeforeUpperSm from "../../assets/images/projects/staircase-and-hallway/staircase-before-upper-sm.webp";
import staircaseBeforeUpperLg from "../../assets/images/projects/staircase-and-hallway/staircase-before-upper-lg.webp";
import exposedBeamCeilingFinishedSm from "../../assets/images/projects/exposed-beam-ceiling/exposed-beam-ceiling-finished-sm.webp";
import exposedBeamCeilingFinishedLg from "../../assets/images/projects/exposed-beam-ceiling/exposed-beam-ceiling-finished-lg.webp";
import beamRoomWoodDoorFinishedSm from "../../assets/images/projects/exposed-beam-ceiling/beam-room-wood-door-finished-sm.webp";
import beamRoomWoodDoorFinishedLg from "../../assets/images/projects/exposed-beam-ceiling/beam-room-wood-door-finished-lg.webp";
import panelCeilingBeforeSeamsSm from "../../assets/images/projects/exposed-beam-ceiling/panel-ceiling-before-seams-sm.webp";
import panelCeilingBeforeSeamsLg from "../../assets/images/projects/exposed-beam-ceiling/panel-ceiling-before-seams-lg.webp";
import panelCeilingBeforeFastenersSm from "../../assets/images/projects/exposed-beam-ceiling/panel-ceiling-before-fasteners-sm.webp";
import panelCeilingBeforeFastenersLg from "../../assets/images/projects/exposed-beam-ceiling/panel-ceiling-before-fasteners-lg.webp";
import grayGreenHomeFrontFinishedSm from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-finished-sm.webp";
import grayGreenHomeFrontFinishedLg from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-finished-lg.webp";
import grayGreenFenceGarageFinishedSm from "../../assets/images/projects/gray-green-home-front-fence/gray-green-fence-garage-finished-sm.webp";
import grayGreenFenceGarageFinishedLg from "../../assets/images/projects/gray-green-home-front-fence/gray-green-fence-garage-finished-lg.webp";
import homeFrontBeforeStepsSm from "../../assets/images/projects/gray-green-home-front-fence/home-front-before-steps-sm.webp";
import homeFrontBeforeStepsLg from "../../assets/images/projects/gray-green-home-front-fence/home-front-before-steps-lg.webp";
import fenceGarageBeforeSm from "../../assets/images/projects/gray-green-home-front-fence/fence-garage-before-sm.webp";
import fenceGarageBeforeLg from "../../assets/images/projects/gray-green-home-front-fence/fence-garage-before-lg.webp";
import blueWallsOrangeCeilingOpenKitchenSm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-open-kitchen-sm.webp";
import blueWallsOrangeCeilingOpenKitchenLg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-open-kitchen-lg.webp";
import blueWallsKitchenIslandPendantsSm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-kitchen-island-pendants-sm.webp";
import blueWallsKitchenIslandPendantsLg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-kitchen-island-pendants-lg.webp";
import grayWallsKitchenBeforeLongRoomSm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/gray-walls-kitchen-before-long-room-sm.webp";
import grayWallsKitchenBeforeLongRoomLg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/gray-walls-kitchen-before-long-room-lg.webp";
import kitchenIslandBeforeSm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/kitchen-island-before-sm.webp";
import kitchenIslandBeforeLg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/kitchen-island-before-lg.webp";
import backDeckBuiltInBenchFirePitSm from "../../assets/images/projects/back-deck-pergola-bench/back-deck-built-in-bench-fire-pit-sm.webp";
import backDeckBuiltInBenchFirePitLg from "../../assets/images/projects/back-deck-pergola-bench/back-deck-built-in-bench-fire-pit-lg.webp";
import backDeckPergolaStepsFinishedSm from "../../assets/images/projects/back-deck-pergola-bench/back-deck-pergola-steps-finished-sm.webp";
import backDeckPergolaStepsFinishedLg from "../../assets/images/projects/back-deck-pergola-bench/back-deck-pergola-steps-finished-lg.webp";
import backDeckStepsBeforeSm from "../../assets/images/projects/back-deck-pergola-bench/back-deck-steps-before-sm.webp";
import backDeckStepsBeforeLg from "../../assets/images/projects/back-deck-pergola-bench/back-deck-steps-before-lg.webp";
import backDeckBeforeFirePitSm from "../../assets/images/projects/back-deck-pergola-bench/back-deck-before-fire-pit-sm.webp";
import backDeckBeforeFirePitLg from "../../assets/images/projects/back-deck-pergola-bench/back-deck-before-fire-pit-lg.webp";
import whiteSidingAwningEntryStepsSm from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-steps-sm.webp";
import whiteSidingAwningEntryStepsLg from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-steps-lg.webp";
import whiteSidingSideWindowFinishedSm from "../../assets/images/projects/white-siding-awning-entry/white-siding-side-window-finished-sm.webp";
import whiteSidingSideWindowFinishedLg from "../../assets/images/projects/white-siding-awning-entry/white-siding-side-window-finished-lg.webp";
import whiteSidingFrontBeforeShrubsSm from "../../assets/images/projects/white-siding-awning-entry/white-siding-front-before-shrubs-sm.webp";
import whiteSidingFrontBeforeShrubsLg from "../../assets/images/projects/white-siding-awning-entry/white-siding-front-before-shrubs-lg.webp";
import whiteSidingEntryStepsBeforeSm from "../../assets/images/projects/white-siding-awning-entry/white-siding-entry-steps-before-sm.webp";
import whiteSidingEntryStepsBeforeLg from "../../assets/images/projects/white-siding-awning-entry/white-siding-entry-steps-before-lg.webp";
import redSidingFrontDoorStepsSm from "../../assets/images/projects/red-siding-exterior/red-siding-front-door-steps-sm.webp";
import redSidingFrontDoorStepsLg from "../../assets/images/projects/red-siding-exterior/red-siding-front-door-steps-lg.webp";
import redSidingSideHoseSm from "../../assets/images/projects/red-siding-exterior/red-siding-side-hose-sm.webp";
import redSidingSideHoseLg from "../../assets/images/projects/red-siding-exterior/red-siding-side-hose-lg.webp";
import redHomeGardenFrontSm from "../../assets/images/projects/red-siding-exterior/red-home-garden-front-sm.webp";
import redHomeGardenFrontLg from "../../assets/images/projects/red-siding-exterior/red-home-garden-front-lg.webp";
import tanSidingFrontBeforeSm from "../../assets/images/projects/red-siding-exterior/tan-siding-front-before-sm.webp";
import tanSidingFrontBeforeLg from "../../assets/images/projects/red-siding-exterior/tan-siding-front-before-lg.webp";
import rooftopDeckFireTableFinishedSm from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-fire-table-finished-sm.webp";
import rooftopDeckFireTableFinishedLg from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-fire-table-finished-lg.webp";
import rooftopDeckLoungeChairsSm from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-lounge-chairs-sm.webp";
import rooftopDeckLoungeChairsLg from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-lounge-chairs-lg.webp";
import navySidingCornerFinishedSm from "../../assets/images/projects/rooftop-deck-navy-siding/navy-siding-corner-finished-sm.webp";
import navySidingCornerFinishedLg from "../../assets/images/projects/rooftop-deck-navy-siding/navy-siding-corner-finished-lg.webp";
import weatheredSidingCornerBeforeSm from "../../assets/images/projects/rooftop-deck-navy-siding/weathered-siding-corner-before-sm.webp";
import weatheredSidingCornerBeforeLg from "../../assets/images/projects/rooftop-deck-navy-siding/weathered-siding-corner-before-lg.webp";
import redFrontDoorGreenSidingSm from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-sm.webp";
import redFrontDoorGreenSidingLg from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-lg.webp";
import frenchDoorsGravelPatioSm from "../../assets/images/projects/red-front-door-green-siding/french-doors-gravel-patio-sm.webp";
import frenchDoorsGravelPatioLg from "../../assets/images/projects/red-front-door-green-siding/french-doors-gravel-patio-lg.webp";
import sideEntryStairsRailingSm from "../../assets/images/projects/red-front-door-green-siding/side-entry-stairs-railing-sm.webp";
import sideEntryStairsRailingLg from "../../assets/images/projects/red-front-door-green-siding/side-entry-stairs-railing-lg.webp";
import sideEntryStairsBeforeSm from "../../assets/images/projects/red-front-door-green-siding/side-entry-stairs-before-sm.webp";
import sideEntryStairsBeforeLg from "../../assets/images/projects/red-front-door-green-siding/side-entry-stairs-before-lg.webp";
import kitchenExposedBeamsBrickWallSm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-sm.webp";
import kitchenExposedBeamsBrickWallLg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-lg.webp";
import kitchenRangeLowerCabinetsSm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-range-lower-cabinets-sm.webp";
import kitchenRangeLowerCabinetsLg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-range-lower-cabinets-lg.webp";
import kitchenBeforeUpperCabinetsSm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-before-upper-cabinets-sm.webp";
import kitchenBeforeUpperCabinetsLg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-before-upper-cabinets-lg.webp";
import kitchenBeforeBrickWindowSm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-before-brick-window-sm.webp";
import kitchenBeforeBrickWindowLg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-before-brick-window-lg.webp";

export type ProjectStage = "Before" | "In progress" | "Finished";

export interface ProjectPhoto {
  sm: string;
  lg: string;
  alt: string;
  stage?: ProjectStage;
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  feature?: boolean;
  photos: ProjectPhoto[];
}

export const projects: ProjectEntry[] = [
  {
    id: "exterior-pink",
    title: "Exterior Color Change",
    category: "Exterior Painting",
    feature: true,
    photos: [
      { sm: exteriorAfterPinkPhoto, lg: exteriorAfterPinkPhoto, alt: "Home exterior finished in a soft blush tone" },
    ],
  },
  {
    id: "interior-bright",
    title: "Interior Refresh",
    category: "Interior Painting",
    photos: [
      { sm: interiorBrightFinishedPhoto, lg: interiorBrightFinishedPhoto, alt: "Bright, finished interior room with hardwood floors" },
    ],
  },
  {
    id: "cabinets-sage",
    title: "Cabinet Refinishing",
    category: "Cabinet Refinishing",
    photos: [
      { sm: cabinetsSageGreenPhoto, lg: cabinetsSageGreenPhoto, alt: "Kitchen cabinets refinished in sage green" },
    ],
  },
  {
    id: "exterior-white",
    title: "Full Exterior Repaint",
    category: "Exterior Painting",
    photos: [
      { sm: exteriorAfterWhitePhoto, lg: exteriorAfterWhitePhoto, alt: "Home exterior finished in crisp white" },
    ],
  },
  {
    id: "kitchen-accent",
    title: "Accent Wall",
    category: "Interior Painting",
    photos: [
      { sm: kitchenBlueAccentPhoto, lg: kitchenBlueAccentPhoto, alt: "Kitchen with a painted blue accent wall" },
    ],
  },
  {
    id: "porch-entry",
    title: "Porch & Entry",
    category: "Exterior Painting",
    photos: [
      { sm: porchYellowDoorPhoto, lg: porchYellowDoorPhoto, alt: "Covered porch with a bold yellow front door" },
    ],
  },
  {
    id: "exterior-in-progress",
    title: "Exterior In Progress",
    category: "Exterior Painting",
    photos: [
      { sm: exteriorInProgressPhoto, lg: exteriorInProgressPhoto, alt: "Exterior siding mid-repaint with protective covering" },
    ],
  },
  {
    id: "interior-empty",
    title: "Interior Refresh",
    category: "Interior Painting",
    photos: [
      { sm: interiorEmptyRoomPhoto, lg: interiorEmptyRoomPhoto, alt: "Freshly painted bedroom ready for move-in" },
    ],
  },
  {
    id: "shingle-siding-exterior",
    title: "Shingle Siding Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: shingleSidingSideDeckSm, lg: shingleSidingSideDeckLg, alt: "Side of a brown shingle-siding home with a wooden deck and steps", stage: "Finished" },
      { sm: shingleSidingHydrangeaSideSm, lg: shingleSidingHydrangeaSideLg, alt: "Shingle-siding home with pink hydrangea shrubs and wooden steps", stage: "Finished" },
      { sm: shingleSidingPaintSprayerSm, lg: shingleSidingPaintSprayerLg, alt: "Paint sprayer and ladder set up beside a shingle-siding home", stage: "In progress" },
      { sm: shingleSidingBeforeSideSm, lg: shingleSidingBeforeSideLg, alt: "Shingle-siding home before the project, side view with a lawn", stage: "Before" },
    ],
  },
  {
    id: "white-kitchen-island",
    title: "White Kitchen With Island",
    category: "Interior Painting",
    photos: [
      { sm: whiteKitchenIslandStoolsSm, lg: whiteKitchenIslandStoolsLg, alt: "White kitchen with an island, pendant lights and bar stools", stage: "Finished" },
      { sm: whiteKitchenWideViewSm, lg: whiteKitchenWideViewLg, alt: "White kitchen with glass-front upper cabinets and wood floors", stage: "Finished" },
      { sm: whiteKitchenWindowSinkSm, lg: whiteKitchenWindowSinkLg, alt: "White kitchen with a farmhouse sink under a bank of windows", stage: "Finished" },
      { sm: whiteKitchenBeforeSinkSm, lg: whiteKitchenBeforeSinkLg, alt: "Kitchen before the project with a farmhouse sink under windows", stage: "Before" },
    ],
  },
  {
    id: "green-living-room-orange-entry",
    title: "Green Living Room and Orange Entry",
    category: "Interior Painting",
    photos: [
      { sm: vaultedLivingRoomGreenWallsSm, lg: vaultedLivingRoomGreenWallsLg, alt: "Living room with green walls, a wood-plank ceiling and track lighting", stage: "Finished" },
      { sm: greenKitchenIslandStoolsSm, lg: greenKitchenIslandStoolsLg, alt: "Kitchen with green walls, pendant lights and an island with bar stools", stage: "Finished" },
      { sm: greenLivingRoomFireplaceSm, lg: greenLivingRoomFireplaceLg, alt: "Living room with green walls and a brick fireplace", stage: "Finished" },
      { sm: orangeEntryCoatRackSm, lg: orangeEntryCoatRackLg, alt: "Entry with orange walls, a white front door and a coat rack", stage: "Finished" },
      { sm: entryBeforeCoatRackSm, lg: entryBeforeCoatRackLg, alt: "Entry before the project with a white front door and a coat rack", stage: "Before" },
      { sm: vaultedLivingRoomBeforeSm, lg: vaultedLivingRoomBeforeLg, alt: "Living room before the project with a wood-plank ceiling and track lighting", stage: "Before" },
    ],
  },
  {
    id: "staircase-and-hallway",
    title: "Staircase and Hallway",
    category: "Interior Painting",
    photos: [
      { sm: staircaseRunnerRugEntrySm, lg: staircaseRunnerRugEntryLg, alt: "Staircase with a patterned runner rug beside a white front door", stage: "Finished" },
      { sm: staircaseWhiteRailingUpperSm, lg: staircaseWhiteRailingUpperLg, alt: "Staircase with a white railing and wood treads, viewed from the landing", stage: "Finished" },
      { sm: staircaseBeforeRugSm, lg: staircaseBeforeRugLg, alt: "Staircase before the project with wood treads and a white railing", stage: "Before" },
      { sm: staircaseBeforeUpperSm, lg: staircaseBeforeUpperLg, alt: "Narrow staircase before the project with a window in the door", stage: "Before" },
    ],
  },
  {
    id: "exposed-beam-ceiling",
    title: "Exposed Beam Ceiling",
    category: "Interior Painting",
    photos: [
      { sm: exposedBeamCeilingFinishedSm, lg: exposedBeamCeilingFinishedLg, alt: "Ceiling with exposed wood beams and light ceiling panels", stage: "Finished" },
      { sm: beamRoomWoodDoorFinishedSm, lg: beamRoomWoodDoorFinishedLg, alt: "Room with a wood door, a wood beam and a fish tank", stage: "Finished" },
      { sm: panelCeilingBeforeSeamsSm, lg: panelCeilingBeforeSeamsLg, alt: "Ceiling before the project with wood beams and visible panel seams", stage: "Before" },
      { sm: panelCeilingBeforeFastenersSm, lg: panelCeilingBeforeFastenersLg, alt: "Panel ceiling before the project with visible seams and fastener marks", stage: "Before" },
    ],
  },
  {
    id: "gray-green-home-front-fence",
    title: "Gray-Green Home Front and Fence",
    category: "Exterior Painting",
    photos: [
      { sm: grayGreenHomeFrontFinishedSm, lg: grayGreenHomeFrontFinishedLg, alt: "Gray-green home front with a white gabled porch, railings and concrete steps", stage: "Finished" },
      { sm: grayGreenFenceGarageFinishedSm, lg: grayGreenFenceGarageFinishedLg, alt: "Gray-green wood fence beside a white garage door", stage: "Finished" },
      { sm: homeFrontBeforeStepsSm, lg: homeFrontBeforeStepsLg, alt: "Home front before the project with gray-green siding and concrete steps", stage: "Before" },
      { sm: fenceGarageBeforeSm, lg: fenceGarageBeforeLg, alt: "Gray-green fence and garage before the project, with shrubs in front", stage: "Before" },
    ],
  },
  {
    id: "blue-walls-orange-ceiling-kitchen",
    title: "Kitchen With Blue Walls and Orange Ceiling",
    category: "Interior Painting",
    photos: [
      { sm: blueWallsOrangeCeilingOpenKitchenSm, lg: blueWallsOrangeCeilingOpenKitchenLg, alt: "Open kitchen and dining area with blue walls and an orange ceiling", stage: "Finished" },
      { sm: blueWallsKitchenIslandPendantsSm, lg: blueWallsKitchenIslandPendantsLg, alt: "Kitchen island with pendant lights, a sink and white cabinets", stage: "Finished" },
      { sm: grayWallsKitchenBeforeLongRoomSm, lg: grayWallsKitchenBeforeLongRoomLg, alt: "Long open kitchen before the project with light walls and pendant lights", stage: "Before" },
      { sm: kitchenIslandBeforeSm, lg: kitchenIslandBeforeLg, alt: "Kitchen island before the project with pendant lights and white cabinets", stage: "Before" },
    ],
  },
  {
    id: "back-deck-pergola-bench",
    title: "Back Deck With Pergola and Bench",
    category: "Exterior Painting",
    photos: [
      { sm: backDeckBuiltInBenchFirePitSm, lg: backDeckBuiltInBenchFirePitLg, alt: "Back deck with a built-in bench around a fire pit", stage: "Finished" },
      { sm: backDeckPergolaStepsFinishedSm, lg: backDeckPergolaStepsFinishedLg, alt: "Back deck steps and pergola beside a two-story home", stage: "Finished" },
      { sm: backDeckStepsBeforeSm, lg: backDeckStepsBeforeLg, alt: "Weathered back deck steps and pergola before the project", stage: "Before" },
      { sm: backDeckBeforeFirePitSm, lg: backDeckBeforeFirePitLg, alt: "Weathered back deck with a fire pit opening before the project", stage: "Before" },
    ],
  },
  {
    id: "white-siding-awning-entry",
    title: "White Siding With Awning and Entry Steps",
    category: "Exterior Painting",
    photos: [
      { sm: whiteSidingAwningEntryStepsSm, lg: whiteSidingAwningEntryStepsLg, alt: "White siding with an awning over entry steps and a brown railing", stage: "Finished" },
      { sm: whiteSidingSideWindowFinishedSm, lg: whiteSidingSideWindowFinishedLg, alt: "White siding with a large window and a basement window", stage: "Finished" },
      { sm: whiteSidingFrontBeforeShrubsSm, lg: whiteSidingFrontBeforeShrubsLg, alt: "Front of a light-colored home before the project, with a tree and shrubs", stage: "Before" },
      { sm: whiteSidingEntryStepsBeforeSm, lg: whiteSidingEntryStepsBeforeLg, alt: "Entry steps and railing before the project beside a light-colored home", stage: "Before" },
    ],
  },
  {
    id: "red-siding-exterior",
    title: "Red Siding Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: redSidingFrontDoorStepsSm, lg: redSidingFrontDoorStepsLg, alt: "Red siding home with a front door and steps", stage: "Finished" },
      { sm: redSidingSideHoseSm, lg: redSidingSideHoseLg, alt: "Red siding home with a window and a garden hose", stage: "Finished" },
      { sm: redHomeGardenFrontSm, lg: redHomeGardenFrontLg, alt: "Red home with garden beds and a front walkway", stage: "Finished" },
      { sm: tanSidingFrontBeforeSm, lg: tanSidingFrontBeforeLg, alt: "Tan-siding home front before the project with a red front door", stage: "Before" },
    ],
  },
  {
    id: "rooftop-deck-navy-siding",
    title: "Rooftop Deck and Navy Siding",
    category: "Exterior Painting",
    photos: [
      { sm: rooftopDeckFireTableFinishedSm, lg: rooftopDeckFireTableFinishedLg, alt: "Rooftop deck with a fire table, railings and gray deck boards", stage: "Finished" },
      { sm: rooftopDeckLoungeChairsSm, lg: rooftopDeckLoungeChairsLg, alt: "Rooftop deck with lounge chairs and a side table", stage: "Finished" },
      { sm: navySidingCornerFinishedSm, lg: navySidingCornerFinishedLg, alt: "Navy siding corner beside a rooftop deck", stage: "Finished" },
      { sm: weatheredSidingCornerBeforeSm, lg: weatheredSidingCornerBeforeLg, alt: "Weathered brown siding corner before the project, beside a deck", stage: "Before" },
    ],
  },
  {
    id: "red-front-door-green-siding",
    title: "Red Front Door and Green Siding",
    category: "Exterior Painting",
    photos: [
      { sm: redFrontDoorGreenSidingSm, lg: redFrontDoorGreenSidingLg, alt: "Bright red front door with a brass mail slot on green siding", stage: "Finished" },
      { sm: frenchDoorsGravelPatioSm, lg: frenchDoorsGravelPatioLg, alt: "French doors and a gravel patio on green siding", stage: "Finished" },
      { sm: sideEntryStairsRailingSm, lg: sideEntryStairsRailingLg, alt: "Side entry stairs with a white railing beside green siding", stage: "Finished" },
      { sm: sideEntryStairsBeforeSm, lg: sideEntryStairsBeforeLg, alt: "Side entry stairs before the project beside green siding", stage: "Before" },
    ],
  },
  {
    id: "kitchen-exposed-beams-brick-wall",
    title: "Kitchen With Exposed Beams and Brick Wall",
    category: "Interior Painting",
    photos: [
      { sm: kitchenExposedBeamsBrickWallSm, lg: kitchenExposedBeamsBrickWallLg, alt: "Kitchen with exposed wood beams, a brick wall and a gas range", stage: "Finished" },
      { sm: kitchenRangeLowerCabinetsSm, lg: kitchenRangeLowerCabinetsLg, alt: "Kitchen range and lower cabinets with a white tile backsplash", stage: "Finished" },
      { sm: kitchenBeforeUpperCabinetsSm, lg: kitchenBeforeUpperCabinetsLg, alt: "Kitchen before the project with white upper cabinets, a sink and a dishwasher", stage: "Before" },
      { sm: kitchenBeforeBrickWindowSm, lg: kitchenBeforeBrickWindowLg, alt: "Kitchen before the project with a brick wall, window and white cabinets", stage: "Before" },
    ],
  },
];

/** Cover photo (first photo) of a project, looked up by id. Throws if the id is missing so a typo fails at build time. */
export function coverPhoto(projectId: string): ProjectPhoto {
  const project = projects.find((p) => p.id === projectId);
  const cover = project?.photos[0];
  if (!cover) throw new Error(`Missing project cover for "${projectId}"`);
  return cover;
}
