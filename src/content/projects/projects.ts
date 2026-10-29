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
import redSidingExteriorFinished1Sm from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-finished-1-sm.webp";
import redSidingExteriorFinished1Lg from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-finished-1-lg.webp";
import redSidingExteriorBefore1Sm from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-1-sm.webp";
import redSidingExteriorBefore1Lg from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-1-lg.webp";
import redSidingExteriorBefore2Sm from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-2-sm.webp";
import redSidingExteriorBefore2Lg from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-2-lg.webp";
import redSidingExteriorBefore3Sm from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-3-sm.webp";
import redSidingExteriorBefore3Lg from "../../assets/images/projects/red-siding-exterior/red-siding-exterior-before-3-lg.webp";
import rooftopDeckNavySidingBefore1Sm from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-navy-siding-before-1-sm.webp";
import rooftopDeckNavySidingBefore1Lg from "../../assets/images/projects/rooftop-deck-navy-siding/rooftop-deck-navy-siding-before-1-lg.webp";
import redFrontDoorGreenSidingFinished1Sm from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-finished-1-sm.webp";
import redFrontDoorGreenSidingFinished1Lg from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-finished-1-lg.webp";
import redFrontDoorGreenSidingFinished2Sm from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-finished-2-sm.webp";
import redFrontDoorGreenSidingFinished2Lg from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-finished-2-lg.webp";
import redFrontDoorGreenSidingBefore1Sm from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-before-1-sm.webp";
import redFrontDoorGreenSidingBefore1Lg from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-before-1-lg.webp";
import redFrontDoorGreenSidingBefore2Sm from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-before-2-sm.webp";
import redFrontDoorGreenSidingBefore2Lg from "../../assets/images/projects/red-front-door-green-siding/red-front-door-green-siding-before-2-lg.webp";
import kitchenExposedBeamsBrickWallFinished1Sm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-finished-1-sm.webp";
import kitchenExposedBeamsBrickWallFinished1Lg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-finished-1-lg.webp";
import kitchenExposedBeamsBrickWallBefore1Sm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-1-sm.webp";
import kitchenExposedBeamsBrickWallBefore1Lg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-1-lg.webp";
import kitchenExposedBeamsBrickWallBefore2Sm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-2-sm.webp";
import kitchenExposedBeamsBrickWallBefore2Lg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-2-lg.webp";
import kitchenExposedBeamsBrickWallBefore3Sm from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-3-sm.webp";
import kitchenExposedBeamsBrickWallBefore3Lg from "../../assets/images/projects/kitchen-exposed-beams-brick-wall/kitchen-exposed-beams-brick-wall-before-3-lg.webp";
import modernGrayExteriorInProgress1Sm from "../../assets/images/projects/modern-gray-exterior/modern-gray-exterior-in-progress-1-sm.webp";
import modernGrayExteriorInProgress1Lg from "../../assets/images/projects/modern-gray-exterior/modern-gray-exterior-in-progress-1-lg.webp";
import blueCraftsmanScreenedPorchFinished1Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-1-sm.webp";
import blueCraftsmanScreenedPorchFinished1Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-1-lg.webp";
import blueCraftsmanScreenedPorchFinished2Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-2-sm.webp";
import blueCraftsmanScreenedPorchFinished2Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-2-lg.webp";
import blueCraftsmanScreenedPorchFinished3Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-3-sm.webp";
import blueCraftsmanScreenedPorchFinished3Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-3-lg.webp";
import blueCraftsmanScreenedPorchFinished4Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-4-sm.webp";
import blueCraftsmanScreenedPorchFinished4Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-finished-4-lg.webp";
import blueCraftsmanScreenedPorchBefore5Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-5-sm.webp";
import blueCraftsmanScreenedPorchBefore5Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-5-lg.webp";
import blueCraftsmanScreenedPorchBefore6Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-6-sm.webp";
import blueCraftsmanScreenedPorchBefore6Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-6-lg.webp";
import blueCraftsmanScreenedPorchBefore7Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-7-sm.webp";
import blueCraftsmanScreenedPorchBefore7Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-before-7-lg.webp";
import blueCraftsmanScreenedPorchInProgress8Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-8-sm.webp";
import blueCraftsmanScreenedPorchInProgress8Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-8-lg.webp";
import blueCraftsmanScreenedPorchInProgress9Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-9-sm.webp";
import blueCraftsmanScreenedPorchInProgress9Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-9-lg.webp";
import blueCraftsmanScreenedPorchInProgress10Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-10-sm.webp";
import blueCraftsmanScreenedPorchInProgress10Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-10-lg.webp";
import blueCraftsmanScreenedPorchInProgress11Sm from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-11-sm.webp";
import blueCraftsmanScreenedPorchInProgress11Lg from "../../assets/images/projects/blue-craftsman-screened-porch/blue-craftsman-screened-porch-in-progress-11-lg.webp";
import backyardShedExteriorFinished1Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-1-sm.webp";
import backyardShedExteriorFinished1Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-1-lg.webp";
import backyardShedExteriorFinished2Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-2-sm.webp";
import backyardShedExteriorFinished2Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-2-lg.webp";
import backyardShedExteriorFinished3Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-3-sm.webp";
import backyardShedExteriorFinished3Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-finished-3-lg.webp";
import backyardShedExteriorBefore4Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-4-sm.webp";
import backyardShedExteriorBefore4Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-4-lg.webp";
import backyardShedExteriorBefore5Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-5-sm.webp";
import backyardShedExteriorBefore5Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-5-lg.webp";
import backyardShedExteriorBefore6Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-6-sm.webp";
import backyardShedExteriorBefore6Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-before-6-lg.webp";
import backyardShedExteriorInProgress7Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-in-progress-7-sm.webp";
import backyardShedExteriorInProgress7Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-in-progress-7-lg.webp";
import backyardShedExteriorInProgress8Sm from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-in-progress-8-sm.webp";
import backyardShedExteriorInProgress8Lg from "../../assets/images/projects/backyard-shed-exterior/backyard-shed-exterior-in-progress-8-lg.webp";
import brickTwoStoryHomeFinished1Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-1-sm.webp";
import brickTwoStoryHomeFinished1Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-1-lg.webp";
import brickTwoStoryHomeFinished2Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-2-sm.webp";
import brickTwoStoryHomeFinished2Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-2-lg.webp";
import brickTwoStoryHomeFinished3Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-3-sm.webp";
import brickTwoStoryHomeFinished3Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-finished-3-lg.webp";
import brickTwoStoryHomeBefore4Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-before-4-sm.webp";
import brickTwoStoryHomeBefore4Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-before-4-lg.webp";
import brickTwoStoryHomeBefore5Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-before-5-sm.webp";
import brickTwoStoryHomeBefore5Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-before-5-lg.webp";
import brickTwoStoryHomeInProgress6Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-6-sm.webp";
import brickTwoStoryHomeInProgress6Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-6-lg.webp";
import brickTwoStoryHomeInProgress7Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-7-sm.webp";
import brickTwoStoryHomeInProgress7Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-7-lg.webp";
import brickTwoStoryHomeInProgress8Sm from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-8-sm.webp";
import brickTwoStoryHomeInProgress8Lg from "../../assets/images/projects/brick-two-story-home/brick-two-story-home-in-progress-8-lg.webp";
import brickYellowEntryFinished1Sm from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-finished-1-sm.webp";
import brickYellowEntryFinished1Lg from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-finished-1-lg.webp";
import brickYellowEntryBefore2Sm from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-before-2-sm.webp";
import brickYellowEntryBefore2Lg from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-before-2-lg.webp";
import brickYellowEntryBefore3Sm from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-before-3-sm.webp";
import brickYellowEntryBefore3Lg from "../../assets/images/projects/brick-yellow-entry/brick-yellow-entry-before-3-lg.webp";
import openLivingAreaFinished1Sm from "../../assets/images/projects/open-living-area/open-living-area-finished-1-sm.webp";
import openLivingAreaFinished1Lg from "../../assets/images/projects/open-living-area/open-living-area-finished-1-lg.webp";
import openLivingAreaFinished2Sm from "../../assets/images/projects/open-living-area/open-living-area-finished-2-sm.webp";
import openLivingAreaFinished2Lg from "../../assets/images/projects/open-living-area/open-living-area-finished-2-lg.webp";
import openLivingAreaBefore3Sm from "../../assets/images/projects/open-living-area/open-living-area-before-3-sm.webp";
import openLivingAreaBefore3Lg from "../../assets/images/projects/open-living-area/open-living-area-before-3-lg.webp";
import openLivingAreaInProgress4Sm from "../../assets/images/projects/open-living-area/open-living-area-in-progress-4-sm.webp";
import openLivingAreaInProgress4Lg from "../../assets/images/projects/open-living-area/open-living-area-in-progress-4-lg.webp";
import shingleSidingExteriorBefore1Sm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-before-1-sm.webp";
import shingleSidingExteriorBefore1Lg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-before-1-lg.webp";
import shingleSidingExteriorInProgress1Sm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-in-progress-1-sm.webp";
import shingleSidingExteriorInProgress1Lg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-in-progress-1-lg.webp";
import shingleSidingExteriorFinished1Sm from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-finished-1-sm.webp";
import shingleSidingExteriorFinished1Lg from "../../assets/images/projects/shingle-siding-exterior/shingle-siding-exterior-finished-1-lg.webp";
import whiteSidingStairEntryFinished1Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-1-sm.webp";
import whiteSidingStairEntryFinished1Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-1-lg.webp";
import whiteSidingStairEntryFinished2Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-2-sm.webp";
import whiteSidingStairEntryFinished2Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-2-lg.webp";
import whiteSidingStairEntryFinished3Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-3-sm.webp";
import whiteSidingStairEntryFinished3Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-finished-3-lg.webp";
import whiteSidingStairEntryBefore4Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-4-sm.webp";
import whiteSidingStairEntryBefore4Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-4-lg.webp";
import whiteSidingStairEntryBefore5Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-5-sm.webp";
import whiteSidingStairEntryBefore5Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-5-lg.webp";
import whiteSidingStairEntryBefore6Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-6-sm.webp";
import whiteSidingStairEntryBefore6Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-6-lg.webp";
import whiteSidingStairEntryBefore7Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-7-sm.webp";
import whiteSidingStairEntryBefore7Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-before-7-lg.webp";
import whiteSidingStairEntryInProgress8Sm from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-in-progress-8-sm.webp";
import whiteSidingStairEntryInProgress8Lg from "../../assets/images/projects/white-siding-stair-entry/white-siding-stair-entry-in-progress-8-lg.webp";
import blueCraftsmanDeckFinished1Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-1-sm.webp";
import blueCraftsmanDeckFinished1Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-1-lg.webp";
import blueCraftsmanDeckFinished2Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-2-sm.webp";
import blueCraftsmanDeckFinished2Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-2-lg.webp";
import blueCraftsmanDeckFinished3Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-3-sm.webp";
import blueCraftsmanDeckFinished3Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-finished-3-lg.webp";
import blueCraftsmanDeckBefore4Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-4-sm.webp";
import blueCraftsmanDeckBefore4Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-4-lg.webp";
import blueCraftsmanDeckBefore5Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-5-sm.webp";
import blueCraftsmanDeckBefore5Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-5-lg.webp";
import blueCraftsmanDeckBefore6Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-6-sm.webp";
import blueCraftsmanDeckBefore6Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-6-lg.webp";
import blueCraftsmanDeckBefore7Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-7-sm.webp";
import blueCraftsmanDeckBefore7Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-before-7-lg.webp";
import blueCraftsmanDeckInProgress8Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-8-sm.webp";
import blueCraftsmanDeckInProgress8Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-8-lg.webp";
import blueCraftsmanDeckInProgress9Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-9-sm.webp";
import blueCraftsmanDeckInProgress9Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-9-lg.webp";
import blueCraftsmanDeckInProgress10Sm from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-10-sm.webp";
import blueCraftsmanDeckInProgress10Lg from "../../assets/images/projects/blue-craftsman-deck/blue-craftsman-deck-in-progress-10-lg.webp";
import greenBungalowTrimFinished1Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-1-sm.webp";
import greenBungalowTrimFinished1Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-1-lg.webp";
import greenBungalowTrimFinished2Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-2-sm.webp";
import greenBungalowTrimFinished2Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-2-lg.webp";
import greenBungalowTrimFinished3Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-3-sm.webp";
import greenBungalowTrimFinished3Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-3-lg.webp";
import greenBungalowTrimFinished4Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-4-sm.webp";
import greenBungalowTrimFinished4Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-finished-4-lg.webp";
import greenBungalowTrimBefore5Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-5-sm.webp";
import greenBungalowTrimBefore5Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-5-lg.webp";
import greenBungalowTrimBefore6Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-6-sm.webp";
import greenBungalowTrimBefore6Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-6-lg.webp";
import greenBungalowTrimBefore7Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-7-sm.webp";
import greenBungalowTrimBefore7Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-7-lg.webp";
import greenBungalowTrimBefore8Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-8-sm.webp";
import greenBungalowTrimBefore8Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-8-lg.webp";
import greenBungalowTrimBefore9Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-9-sm.webp";
import greenBungalowTrimBefore9Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-before-9-lg.webp";
import greenBungalowTrimInProgress10Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-10-sm.webp";
import greenBungalowTrimInProgress10Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-10-lg.webp";
import greenBungalowTrimInProgress11Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-11-sm.webp";
import greenBungalowTrimInProgress11Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-11-lg.webp";
import greenBungalowTrimInProgress12Sm from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-12-sm.webp";
import greenBungalowTrimInProgress12Lg from "../../assets/images/projects/green-bungalow-trim/green-bungalow-trim-in-progress-12-lg.webp";
import grayGambrelHomeFinished1Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-1-sm.webp";
import grayGambrelHomeFinished1Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-1-lg.webp";
import grayGambrelHomeFinished2Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-2-sm.webp";
import grayGambrelHomeFinished2Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-2-lg.webp";
import grayGambrelHomeFinished3Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-3-sm.webp";
import grayGambrelHomeFinished3Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-3-lg.webp";
import grayGambrelHomeFinished4Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-4-sm.webp";
import grayGambrelHomeFinished4Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-4-lg.webp";
import grayGambrelHomeFinished5Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-5-sm.webp";
import grayGambrelHomeFinished5Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-finished-5-lg.webp";
import grayGambrelHomeBefore6Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-before-6-sm.webp";
import grayGambrelHomeBefore6Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-before-6-lg.webp";
import grayGambrelHomeBefore7Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-before-7-sm.webp";
import grayGambrelHomeBefore7Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-before-7-lg.webp";
import grayGambrelHomeInProgress8Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-in-progress-8-sm.webp";
import grayGambrelHomeInProgress8Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-in-progress-8-lg.webp";
import grayGambrelHomeInProgress9Sm from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-in-progress-9-sm.webp";
import grayGambrelHomeInProgress9Lg from "../../assets/images/projects/gray-gambrel-home/gray-gambrel-home-in-progress-9-lg.webp";
import redCedarShingleHomeFinished1Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-1-sm.webp";
import redCedarShingleHomeFinished1Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-1-lg.webp";
import redCedarShingleHomeFinished2Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-2-sm.webp";
import redCedarShingleHomeFinished2Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-2-lg.webp";
import redCedarShingleHomeFinished3Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-3-sm.webp";
import redCedarShingleHomeFinished3Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-3-lg.webp";
import redCedarShingleHomeFinished4Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-4-sm.webp";
import redCedarShingleHomeFinished4Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-4-lg.webp";
import redCedarShingleHomeFinished5Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-5-sm.webp";
import redCedarShingleHomeFinished5Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-finished-5-lg.webp";
import redCedarShingleHomeBefore6Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-6-sm.webp";
import redCedarShingleHomeBefore6Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-6-lg.webp";
import redCedarShingleHomeBefore7Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-7-sm.webp";
import redCedarShingleHomeBefore7Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-7-lg.webp";
import redCedarShingleHomeBefore8Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-8-sm.webp";
import redCedarShingleHomeBefore8Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-8-lg.webp";
import redCedarShingleHomeBefore9Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-9-sm.webp";
import redCedarShingleHomeBefore9Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-before-9-lg.webp";
import redCedarShingleHomeInProgress10Sm from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-in-progress-10-sm.webp";
import redCedarShingleHomeInProgress10Lg from "../../assets/images/projects/red-cedar-shingle-home/red-cedar-shingle-home-in-progress-10-lg.webp";
import navySidingSideFinished1Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-1-sm.webp";
import navySidingSideFinished1Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-1-lg.webp";
import navySidingSideFinished2Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-2-sm.webp";
import navySidingSideFinished2Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-2-lg.webp";
import navySidingSideFinished3Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-3-sm.webp";
import navySidingSideFinished3Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-3-lg.webp";
import navySidingSideFinished4Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-4-sm.webp";
import navySidingSideFinished4Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-4-lg.webp";
import navySidingSideFinished5Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-5-sm.webp";
import navySidingSideFinished5Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-finished-5-lg.webp";
import navySidingSidePhoto6Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-6-sm.webp";
import navySidingSidePhoto6Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-6-lg.webp";
import navySidingSidePhoto7Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-7-sm.webp";
import navySidingSidePhoto7Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-7-lg.webp";
import navySidingSidePhoto8Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-8-sm.webp";
import navySidingSidePhoto8Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-photo-8-lg.webp";
import navySidingSideInProgress9Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-in-progress-9-sm.webp";
import navySidingSideInProgress9Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-in-progress-9-lg.webp";
import navySidingSideInProgress10Sm from "../../assets/images/projects/navy-siding-side/navy-siding-side-in-progress-10-sm.webp";
import navySidingSideInProgress10Lg from "../../assets/images/projects/navy-siding-side/navy-siding-side-in-progress-10-lg.webp";
import brickChimneyFinished1Sm from "../../assets/images/projects/brick-chimney/brick-chimney-finished-1-sm.webp";
import brickChimneyFinished1Lg from "../../assets/images/projects/brick-chimney/brick-chimney-finished-1-lg.webp";
import brickChimneyBefore2Sm from "../../assets/images/projects/brick-chimney/brick-chimney-before-2-sm.webp";
import brickChimneyBefore2Lg from "../../assets/images/projects/brick-chimney/brick-chimney-before-2-lg.webp";
import wholeHomeInteriorFinished1Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-1-sm.webp";
import wholeHomeInteriorFinished1Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-1-lg.webp";
import wholeHomeInteriorFinished2Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-2-sm.webp";
import wholeHomeInteriorFinished2Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-2-lg.webp";
import wholeHomeInteriorFinished3Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-3-sm.webp";
import wholeHomeInteriorFinished3Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-3-lg.webp";
import wholeHomeInteriorFinished4Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-4-sm.webp";
import wholeHomeInteriorFinished4Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-4-lg.webp";
import wholeHomeInteriorFinished5Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-5-sm.webp";
import wholeHomeInteriorFinished5Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-5-lg.webp";
import wholeHomeInteriorFinished6Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-6-sm.webp";
import wholeHomeInteriorFinished6Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-6-lg.webp";
import wholeHomeInteriorFinished7Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-7-sm.webp";
import wholeHomeInteriorFinished7Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-finished-7-lg.webp";
import wholeHomeInteriorPhoto8Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-8-sm.webp";
import wholeHomeInteriorPhoto8Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-8-lg.webp";
import wholeHomeInteriorPhoto9Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-9-sm.webp";
import wholeHomeInteriorPhoto9Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-9-lg.webp";
import wholeHomeInteriorPhoto10Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-10-sm.webp";
import wholeHomeInteriorPhoto10Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-10-lg.webp";
import wholeHomeInteriorPhoto11Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-11-sm.webp";
import wholeHomeInteriorPhoto11Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-11-lg.webp";
import wholeHomeInteriorPhoto12Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-12-sm.webp";
import wholeHomeInteriorPhoto12Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-12-lg.webp";
import wholeHomeInteriorPhoto13Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-13-sm.webp";
import wholeHomeInteriorPhoto13Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-13-lg.webp";
import wholeHomeInteriorPhoto14Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-14-sm.webp";
import wholeHomeInteriorPhoto14Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-14-lg.webp";
import wholeHomeInteriorPhoto15Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-15-sm.webp";
import wholeHomeInteriorPhoto15Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-15-lg.webp";
import wholeHomeInteriorPhoto16Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-16-sm.webp";
import wholeHomeInteriorPhoto16Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-photo-16-lg.webp";
import wholeHomeInteriorInProgress17Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-17-sm.webp";
import wholeHomeInteriorInProgress17Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-17-lg.webp";
import wholeHomeInteriorInProgress18Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-18-sm.webp";
import wholeHomeInteriorInProgress18Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-18-lg.webp";
import wholeHomeInteriorInProgress19Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-19-sm.webp";
import wholeHomeInteriorInProgress19Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-19-lg.webp";
import wholeHomeInteriorInProgress20Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-20-sm.webp";
import wholeHomeInteriorInProgress20Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-20-lg.webp";
import wholeHomeInteriorInProgress21Sm from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-21-sm.webp";
import wholeHomeInteriorInProgress21Lg from "../../assets/images/projects/whole-home-interior/whole-home-interior-in-progress-21-lg.webp";
import bedroomWallsFinished1Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-1-sm.webp";
import bedroomWallsFinished1Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-1-lg.webp";
import bedroomWallsFinished2Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-2-sm.webp";
import bedroomWallsFinished2Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-2-lg.webp";
import bedroomWallsFinished3Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-3-sm.webp";
import bedroomWallsFinished3Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-3-lg.webp";
import bedroomWallsFinished4Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-4-sm.webp";
import bedroomWallsFinished4Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-finished-4-lg.webp";
import bedroomWallsBefore5Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-5-sm.webp";
import bedroomWallsBefore5Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-5-lg.webp";
import bedroomWallsBefore6Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-6-sm.webp";
import bedroomWallsBefore6Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-6-lg.webp";
import bedroomWallsBefore7Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-7-sm.webp";
import bedroomWallsBefore7Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-before-7-lg.webp";
import bedroomWallsInProgress8Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-8-sm.webp";
import bedroomWallsInProgress8Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-8-lg.webp";
import bedroomWallsInProgress9Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-9-sm.webp";
import bedroomWallsInProgress9Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-9-lg.webp";
import bedroomWallsInProgress10Sm from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-10-sm.webp";
import bedroomWallsInProgress10Lg from "../../assets/images/projects/bedroom-walls/bedroom-walls-in-progress-10-lg.webp";
import blueTwoStoryFrontFinished1Sm from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-finished-1-sm.webp";
import blueTwoStoryFrontFinished1Lg from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-finished-1-lg.webp";
import blueTwoStoryFrontFinished2Sm from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-finished-2-sm.webp";
import blueTwoStoryFrontFinished2Lg from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-finished-2-lg.webp";
import blueTwoStoryFrontBefore3Sm from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-before-3-sm.webp";
import blueTwoStoryFrontBefore3Lg from "../../assets/images/projects/blue-two-story-front/blue-two-story-front-before-3-lg.webp";
import whiteKitchenIslandFinished1Sm from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-finished-1-sm.webp";
import whiteKitchenIslandFinished1Lg from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-finished-1-lg.webp";
import whiteKitchenIslandBefore1Sm from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-before-1-sm.webp";
import whiteKitchenIslandBefore1Lg from "../../assets/images/projects/white-kitchen-island/white-kitchen-island-before-1-lg.webp";
import tealCraftsmanFinished1Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-1-sm.webp";
import tealCraftsmanFinished1Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-1-lg.webp";
import tealCraftsmanFinished2Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-2-sm.webp";
import tealCraftsmanFinished2Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-2-lg.webp";
import tealCraftsmanFinished3Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-3-sm.webp";
import tealCraftsmanFinished3Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-finished-3-lg.webp";
import tealCraftsmanBefore4Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-4-sm.webp";
import tealCraftsmanBefore4Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-4-lg.webp";
import tealCraftsmanBefore5Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-5-sm.webp";
import tealCraftsmanBefore5Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-5-lg.webp";
import tealCraftsmanBefore6Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-6-sm.webp";
import tealCraftsmanBefore6Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-before-6-lg.webp";
import tealCraftsmanInProgress7Sm from "../../assets/images/projects/teal-craftsman/teal-craftsman-in-progress-7-sm.webp";
import tealCraftsmanInProgress7Lg from "../../assets/images/projects/teal-craftsman/teal-craftsman-in-progress-7-lg.webp";
import whiteStuccoRanchFinished1Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-1-sm.webp";
import whiteStuccoRanchFinished1Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-1-lg.webp";
import whiteStuccoRanchFinished2Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-2-sm.webp";
import whiteStuccoRanchFinished2Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-2-lg.webp";
import whiteStuccoRanchFinished3Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-3-sm.webp";
import whiteStuccoRanchFinished3Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-3-lg.webp";
import whiteStuccoRanchFinished4Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-4-sm.webp";
import whiteStuccoRanchFinished4Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-4-lg.webp";
import whiteStuccoRanchFinished5Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-5-sm.webp";
import whiteStuccoRanchFinished5Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-finished-5-lg.webp";
import whiteStuccoRanchBefore6Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-6-sm.webp";
import whiteStuccoRanchBefore6Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-6-lg.webp";
import whiteStuccoRanchBefore7Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-7-sm.webp";
import whiteStuccoRanchBefore7Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-7-lg.webp";
import whiteStuccoRanchBefore8Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-8-sm.webp";
import whiteStuccoRanchBefore8Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-8-lg.webp";
import whiteStuccoRanchBefore9Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-9-sm.webp";
import whiteStuccoRanchBefore9Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-9-lg.webp";
import whiteStuccoRanchBefore10Sm from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-10-sm.webp";
import whiteStuccoRanchBefore10Lg from "../../assets/images/projects/white-stucco-ranch/white-stucco-ranch-before-10-lg.webp";
import greenLivingRoomOrangeEntryBefore1Sm from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-orange-entry-before-1-sm.webp";
import greenLivingRoomOrangeEntryBefore1Lg from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-orange-entry-before-1-lg.webp";
import greenLivingRoomOrangeEntryBefore2Sm from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-orange-entry-before-2-sm.webp";
import greenLivingRoomOrangeEntryBefore2Lg from "../../assets/images/projects/green-living-room-orange-entry/green-living-room-orange-entry-before-2-lg.webp";
import staircaseAndHallwayFinished1Sm from "../../assets/images/projects/staircase-and-hallway/staircase-and-hallway-finished-1-sm.webp";
import staircaseAndHallwayFinished1Lg from "../../assets/images/projects/staircase-and-hallway/staircase-and-hallway-finished-1-lg.webp";
import staircaseAndHallwayBefore1Sm from "../../assets/images/projects/staircase-and-hallway/staircase-and-hallway-before-1-sm.webp";
import staircaseAndHallwayBefore1Lg from "../../assets/images/projects/staircase-and-hallway/staircase-and-hallway-before-1-lg.webp";
import exposedBeamCeilingBefore1Sm from "../../assets/images/projects/exposed-beam-ceiling/exposed-beam-ceiling-before-1-sm.webp";
import exposedBeamCeilingBefore1Lg from "../../assets/images/projects/exposed-beam-ceiling/exposed-beam-ceiling-before-1-lg.webp";
import grayGreenHomeFrontFenceFinished1Sm from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-fence-finished-1-sm.webp";
import grayGreenHomeFrontFenceFinished1Lg from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-fence-finished-1-lg.webp";
import grayGreenHomeFrontFenceBefore1Sm from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-fence-before-1-sm.webp";
import grayGreenHomeFrontFenceBefore1Lg from "../../assets/images/projects/gray-green-home-front-fence/gray-green-home-front-fence-before-1-lg.webp";
import blueWallsOrangeCeilingKitchenFinished1Sm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-kitchen-finished-1-sm.webp";
import blueWallsOrangeCeilingKitchenFinished1Lg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-kitchen-finished-1-lg.webp";
import blueWallsOrangeCeilingKitchenBefore1Sm from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-kitchen-before-1-sm.webp";
import blueWallsOrangeCeilingKitchenBefore1Lg from "../../assets/images/projects/blue-walls-orange-ceiling-kitchen/blue-walls-orange-ceiling-kitchen-before-1-lg.webp";
import backDeckPergolaBenchFinished1Sm from "../../assets/images/projects/back-deck-pergola-bench/back-deck-pergola-bench-finished-1-sm.webp";
import backDeckPergolaBenchFinished1Lg from "../../assets/images/projects/back-deck-pergola-bench/back-deck-pergola-bench-finished-1-lg.webp";
import whiteSidingAwningEntryFinished1Sm from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-finished-1-sm.webp";
import whiteSidingAwningEntryFinished1Lg from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-finished-1-lg.webp";
import whiteSidingAwningEntryBefore1Sm from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-before-1-sm.webp";
import whiteSidingAwningEntryBefore1Lg from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-before-1-lg.webp";
import whiteSidingAwningEntryBefore2Sm from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-before-2-sm.webp";
import whiteSidingAwningEntryBefore2Lg from "../../assets/images/projects/white-siding-awning-entry/white-siding-awning-entry-before-2-lg.webp";

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
    title: "Blush-Tone Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: exteriorAfterPinkPhoto, lg: exteriorAfterPinkPhoto, alt: "Home exterior finished in a soft blush tone" },
    ],
  },
  {
    id: "interior-bright",
    title: "Bright Hardwood Room",
    category: "Interior Painting",
    photos: [
      { sm: interiorBrightFinishedPhoto, lg: interiorBrightFinishedPhoto, alt: "Bright, finished interior room with hardwood floors" },
    ],
  },
  {
    id: "cabinets-sage",
    title: "Sage Green Cabinets",
    category: "Cabinet Refinishing",
    photos: [
      { sm: cabinetsSageGreenPhoto, lg: cabinetsSageGreenPhoto, alt: "Kitchen cabinets refinished in sage green" },
    ],
  },
  {
    id: "exterior-white",
    title: "Crisp White Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: exteriorAfterWhitePhoto, lg: exteriorAfterWhitePhoto, alt: "Home exterior finished in crisp white" },
    ],
  },
  {
    id: "kitchen-accent",
    title: "Blue Accent Kitchen",
    category: "Interior Painting",
    photos: [
      { sm: kitchenBlueAccentPhoto, lg: kitchenBlueAccentPhoto, alt: "Kitchen with a painted blue accent wall" },
    ],
  },
  {
    id: "porch-entry",
    title: "Yellow Door Porch",
    category: "Exterior Painting",
    photos: [
      { sm: porchYellowDoorPhoto, lg: porchYellowDoorPhoto, alt: "Covered porch with a bold yellow front door" },
    ],
  },
  {
    id: "exterior-in-progress",
    title: "Siding Repaint in Progress",
    category: "Exterior Painting",
    photos: [
      { sm: exteriorInProgressPhoto, lg: exteriorInProgressPhoto, alt: "Exterior siding mid-repaint with protective covering" },
    ],
  },
  {
    id: "interior-empty",
    title: "Move-In Ready Bedroom",
    category: "Interior Painting",
    photos: [
      { sm: interiorEmptyRoomPhoto, lg: interiorEmptyRoomPhoto, alt: "Freshly painted bedroom ready for move-in" },
    ],
  },
  {
    id: "shingle-siding-exterior",
    title: "Brown Shingle Home and Deck",
    category: "Exterior Painting",
    photos: [
      { sm: shingleSidingSideDeckSm, lg: shingleSidingSideDeckLg, alt: "Side of a brown shingle-siding home with a wooden deck and steps", stage: "Finished" },
      { sm: shingleSidingHydrangeaSideSm, lg: shingleSidingHydrangeaSideLg, alt: "Shingle-siding home with pink hydrangea shrubs and wooden steps", stage: "Finished" },
      { sm: shingleSidingPaintSprayerSm, lg: shingleSidingPaintSprayerLg, alt: "Paint sprayer and ladder set up beside a shingle-siding home", stage: "In progress" },
      { sm: shingleSidingBeforeSideSm, lg: shingleSidingBeforeSideLg, alt: "Shingle-siding home before the project, side view with a lawn", stage: "Before" },
      { sm: shingleSidingExteriorBefore1Sm, lg: shingleSidingExteriorBefore1Lg, alt: "Brown shingle-siding home with a wooden deck and steps before the project", stage: "Before" },
      { sm: shingleSidingExteriorInProgress1Sm, lg: shingleSidingExteriorInProgress1Lg, alt: "Brown shingle-siding home with a wooden deck and steps during painting work", stage: "In progress" },
      { sm: shingleSidingExteriorFinished1Sm, lg: shingleSidingExteriorFinished1Lg, alt: "Brown shingle-siding home with a wooden deck and steps, finished", stage: "Finished" },
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
      { sm: whiteKitchenIslandFinished1Sm, lg: whiteKitchenIslandFinished1Lg, alt: "White kitchen with an island, finished", stage: "Finished" },
      { sm: whiteKitchenIslandBefore1Sm, lg: whiteKitchenIslandBefore1Lg, alt: "White kitchen with an island before the project", stage: "Before" },
    ],
  },
  {
    id: "green-living-room-orange-entry",
    title: "Green Living Room, Orange Entry",
    category: "Interior Painting",
    photos: [
      { sm: vaultedLivingRoomGreenWallsSm, lg: vaultedLivingRoomGreenWallsLg, alt: "Living room with green walls, a wood-plank ceiling and track lighting", stage: "Finished" },
      { sm: greenKitchenIslandStoolsSm, lg: greenKitchenIslandStoolsLg, alt: "Kitchen with green walls, pendant lights and an island with bar stools", stage: "Finished" },
      { sm: greenLivingRoomFireplaceSm, lg: greenLivingRoomFireplaceLg, alt: "Living room with green walls and a brick fireplace", stage: "Finished" },
      { sm: orangeEntryCoatRackSm, lg: orangeEntryCoatRackLg, alt: "Entry with orange walls, a white front door and a coat rack", stage: "Finished" },
      { sm: entryBeforeCoatRackSm, lg: entryBeforeCoatRackLg, alt: "Entry before the project with a white front door and a coat rack", stage: "Before" },
      { sm: vaultedLivingRoomBeforeSm, lg: vaultedLivingRoomBeforeLg, alt: "Living room before the project with a wood-plank ceiling and track lighting", stage: "Before" },
      { sm: greenLivingRoomOrangeEntryBefore1Sm, lg: greenLivingRoomOrangeEntryBefore1Lg, alt: "Green and orange living spaces before the project", stage: "Before" },
      { sm: greenLivingRoomOrangeEntryBefore2Sm, lg: greenLivingRoomOrangeEntryBefore2Lg, alt: "Green and orange living spaces before the project", stage: "Before" },
    ],
  },
  {
    id: "staircase-and-hallway",
    title: "Staircase With Runner Rug",
    category: "Interior Painting",
    photos: [
      { sm: staircaseRunnerRugEntrySm, lg: staircaseRunnerRugEntryLg, alt: "Staircase with a patterned runner rug beside a white front door", stage: "Finished" },
      { sm: staircaseWhiteRailingUpperSm, lg: staircaseWhiteRailingUpperLg, alt: "Staircase with a white railing and wood treads, viewed from the landing", stage: "Finished" },
      { sm: staircaseBeforeRugSm, lg: staircaseBeforeRugLg, alt: "Staircase before the project with wood treads and a white railing", stage: "Before" },
      { sm: staircaseBeforeUpperSm, lg: staircaseBeforeUpperLg, alt: "Narrow staircase before the project with a window in the door", stage: "Before" },
      { sm: staircaseAndHallwayFinished1Sm, lg: staircaseAndHallwayFinished1Lg, alt: "Staircase with a white railing and runner rug, finished", stage: "Finished" },
      { sm: staircaseAndHallwayBefore1Sm, lg: staircaseAndHallwayBefore1Lg, alt: "Staircase with a white railing and runner rug before the project", stage: "Before" },
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
      { sm: exposedBeamCeilingBefore1Sm, lg: exposedBeamCeilingBefore1Lg, alt: "Ceiling with exposed wood beams before the project", stage: "Before" },
    ],
  },
  {
    id: "gray-green-home-front-fence",
    title: "Gray-Green Home Front and Fence",
    category: "Exterior Painting",
    feature: true,
    photos: [
      { sm: grayGreenHomeFrontFinishedSm, lg: grayGreenHomeFrontFinishedLg, alt: "Gray-green home front with a white gabled porch, railings and concrete steps", stage: "Finished" },
      { sm: grayGreenFenceGarageFinishedSm, lg: grayGreenFenceGarageFinishedLg, alt: "Gray-green wood fence beside a white garage door", stage: "Finished" },
      { sm: homeFrontBeforeStepsSm, lg: homeFrontBeforeStepsLg, alt: "Home front before the project with gray-green siding and concrete steps", stage: "Before" },
      { sm: fenceGarageBeforeSm, lg: fenceGarageBeforeLg, alt: "Gray-green fence and garage before the project, with shrubs in front", stage: "Before" },
      { sm: grayGreenHomeFrontFenceFinished1Sm, lg: grayGreenHomeFrontFenceFinished1Lg, alt: "Gray-green home front and fence, finished", stage: "Finished" },
      { sm: grayGreenHomeFrontFenceBefore1Sm, lg: grayGreenHomeFrontFenceBefore1Lg, alt: "Gray-green home front and fence before the project", stage: "Before" },
    ],
  },
  {
    id: "blue-walls-orange-ceiling-kitchen",
    title: "Blue Walls, Orange Ceiling",
    category: "Interior Painting",
    photos: [
      { sm: blueWallsOrangeCeilingOpenKitchenSm, lg: blueWallsOrangeCeilingOpenKitchenLg, alt: "Open kitchen and dining area with blue walls and an orange ceiling", stage: "Finished" },
      { sm: blueWallsKitchenIslandPendantsSm, lg: blueWallsKitchenIslandPendantsLg, alt: "Kitchen island with pendant lights, a sink and white cabinets", stage: "Finished" },
      { sm: grayWallsKitchenBeforeLongRoomSm, lg: grayWallsKitchenBeforeLongRoomLg, alt: "Long open kitchen before the project with light walls and pendant lights", stage: "Before" },
      { sm: kitchenIslandBeforeSm, lg: kitchenIslandBeforeLg, alt: "Kitchen island before the project with pendant lights and white cabinets", stage: "Before" },
      { sm: blueWallsOrangeCeilingKitchenFinished1Sm, lg: blueWallsOrangeCeilingKitchenFinished1Lg, alt: "Open kitchen with blue walls and an orange ceiling, finished", stage: "Finished" },
      { sm: blueWallsOrangeCeilingKitchenBefore1Sm, lg: blueWallsOrangeCeilingKitchenBefore1Lg, alt: "Open kitchen with blue walls and an orange ceiling before the project", stage: "Before" },
    ],
  },
  {
    id: "back-deck-pergola-bench",
    title: "Pergola Deck and Fire Pit",
    category: "Exterior Painting",
    photos: [
      { sm: backDeckBuiltInBenchFirePitSm, lg: backDeckBuiltInBenchFirePitLg, alt: "Back deck with a built-in bench around a fire pit", stage: "Finished" },
      { sm: backDeckPergolaStepsFinishedSm, lg: backDeckPergolaStepsFinishedLg, alt: "Back deck steps and pergola beside a two-story home", stage: "Finished" },
      { sm: backDeckStepsBeforeSm, lg: backDeckStepsBeforeLg, alt: "Weathered back deck steps and pergola before the project", stage: "Before" },
      { sm: backDeckBeforeFirePitSm, lg: backDeckBeforeFirePitLg, alt: "Weathered back deck with a fire pit opening before the project", stage: "Before" },
      { sm: backDeckPergolaBenchFinished1Sm, lg: backDeckPergolaBenchFinished1Lg, alt: "Back deck with a pergola, finished", stage: "Finished" },
    ],
  },
  {
    id: "white-siding-awning-entry",
    title: "White Siding and Awning",
    category: "Exterior Painting",
    photos: [
      { sm: whiteSidingAwningEntryStepsSm, lg: whiteSidingAwningEntryStepsLg, alt: "White siding with an awning over entry steps and a brown railing", stage: "Finished" },
      { sm: whiteSidingSideWindowFinishedSm, lg: whiteSidingSideWindowFinishedLg, alt: "White siding with a large window and a basement window", stage: "Finished" },
      { sm: whiteSidingFrontBeforeShrubsSm, lg: whiteSidingFrontBeforeShrubsLg, alt: "Front of a light-colored home before the project, with a tree and shrubs", stage: "Before" },
      { sm: whiteSidingEntryStepsBeforeSm, lg: whiteSidingEntryStepsBeforeLg, alt: "Entry steps and railing before the project beside a light-colored home", stage: "Before" },
      { sm: whiteSidingAwningEntryFinished1Sm, lg: whiteSidingAwningEntryFinished1Lg, alt: "White-siding home with an awning, finished", stage: "Finished" },
      { sm: whiteSidingAwningEntryBefore1Sm, lg: whiteSidingAwningEntryBefore1Lg, alt: "White-siding home with an awning before the project", stage: "Before" },
      { sm: whiteSidingAwningEntryBefore2Sm, lg: whiteSidingAwningEntryBefore2Lg, alt: "White-siding home with an awning before the project", stage: "Before" },
    ],
  },
  {
    id: "red-siding-exterior",
    title: "Red Siding Home",
    category: "Exterior Painting",
    photos: [
      { sm: redSidingFrontDoorStepsSm, lg: redSidingFrontDoorStepsLg, alt: "Red siding home with a front door and steps", stage: "Finished" },
      { sm: redSidingSideHoseSm, lg: redSidingSideHoseLg, alt: "Red siding home with a window and a garden hose", stage: "Finished" },
      { sm: redHomeGardenFrontSm, lg: redHomeGardenFrontLg, alt: "Red home with garden beds and a front walkway", stage: "Finished" },
      { sm: tanSidingFrontBeforeSm, lg: tanSidingFrontBeforeLg, alt: "Tan-siding home front before the project with a red front door", stage: "Before" },
      { sm: redSidingExteriorFinished1Sm, lg: redSidingExteriorFinished1Lg, alt: "Red-siding home, finished", stage: "Finished" },
      { sm: redSidingExteriorBefore1Sm, lg: redSidingExteriorBefore1Lg, alt: "Red-siding home before the project", stage: "Before" },
      { sm: redSidingExteriorBefore2Sm, lg: redSidingExteriorBefore2Lg, alt: "Red-siding home before the project", stage: "Before" },
      { sm: redSidingExteriorBefore3Sm, lg: redSidingExteriorBefore3Lg, alt: "Red-siding home before the project", stage: "Before" },
    ],
  },
  {
    id: "rooftop-deck-navy-siding",
    title: "Navy Siding and Rooftop Deck",
    category: "Exterior Painting",
    photos: [
      { sm: rooftopDeckFireTableFinishedSm, lg: rooftopDeckFireTableFinishedLg, alt: "Rooftop deck with a fire table, railings and gray deck boards", stage: "Finished" },
      { sm: rooftopDeckLoungeChairsSm, lg: rooftopDeckLoungeChairsLg, alt: "Rooftop deck with lounge chairs and a side table", stage: "Finished" },
      { sm: navySidingCornerFinishedSm, lg: navySidingCornerFinishedLg, alt: "Navy siding corner beside a rooftop deck", stage: "Finished" },
      { sm: weatheredSidingCornerBeforeSm, lg: weatheredSidingCornerBeforeLg, alt: "Weathered brown siding corner before the project, beside a deck", stage: "Before" },
      { sm: rooftopDeckNavySidingBefore1Sm, lg: rooftopDeckNavySidingBefore1Lg, alt: "Rooftop deck with navy siding before the project", stage: "Before" },
    ],
  },
  {
    id: "red-front-door-green-siding",
    title: "Red Door on Green Siding",
    category: "Exterior Painting",
    photos: [
      { sm: redFrontDoorGreenSidingSm, lg: redFrontDoorGreenSidingLg, alt: "Bright red front door with a brass mail slot on green siding", stage: "Finished" },
      { sm: frenchDoorsGravelPatioSm, lg: frenchDoorsGravelPatioLg, alt: "French doors and a gravel patio on green siding", stage: "Finished" },
      { sm: sideEntryStairsRailingSm, lg: sideEntryStairsRailingLg, alt: "Side entry stairs with a white railing beside green siding", stage: "Finished" },
      { sm: sideEntryStairsBeforeSm, lg: sideEntryStairsBeforeLg, alt: "Side entry stairs before the project beside green siding", stage: "Before" },
      { sm: redFrontDoorGreenSidingFinished1Sm, lg: redFrontDoorGreenSidingFinished1Lg, alt: "Red-door home with green siding, finished", stage: "Finished" },
      { sm: redFrontDoorGreenSidingFinished2Sm, lg: redFrontDoorGreenSidingFinished2Lg, alt: "Red-door home with green siding, finished", stage: "Finished" },
      { sm: redFrontDoorGreenSidingBefore1Sm, lg: redFrontDoorGreenSidingBefore1Lg, alt: "Red-door home with green siding before the project", stage: "Before" },
      { sm: redFrontDoorGreenSidingBefore2Sm, lg: redFrontDoorGreenSidingBefore2Lg, alt: "Red-door home with green siding before the project", stage: "Before" },
    ],
  },
  {
    id: "kitchen-exposed-beams-brick-wall",
    title: "Exposed Beams and Brick Kitchen",
    category: "Interior Painting",
    photos: [
      { sm: kitchenExposedBeamsBrickWallSm, lg: kitchenExposedBeamsBrickWallLg, alt: "Kitchen with exposed wood beams, a brick wall and a gas range", stage: "Finished" },
      { sm: kitchenRangeLowerCabinetsSm, lg: kitchenRangeLowerCabinetsLg, alt: "Kitchen range and lower cabinets with a white tile backsplash", stage: "Finished" },
      { sm: kitchenBeforeUpperCabinetsSm, lg: kitchenBeforeUpperCabinetsLg, alt: "Kitchen before the project with white upper cabinets, a sink and a dishwasher", stage: "Before" },
      { sm: kitchenBeforeBrickWindowSm, lg: kitchenBeforeBrickWindowLg, alt: "Kitchen before the project with a brick wall, window and white cabinets", stage: "Before" },
      { sm: kitchenExposedBeamsBrickWallFinished1Sm, lg: kitchenExposedBeamsBrickWallFinished1Lg, alt: "Dark-cabinet kitchen with exposed beams, finished", stage: "Finished" },
      { sm: kitchenExposedBeamsBrickWallBefore1Sm, lg: kitchenExposedBeamsBrickWallBefore1Lg, alt: "Dark-cabinet kitchen with exposed beams before the project", stage: "Before" },
      { sm: kitchenExposedBeamsBrickWallBefore2Sm, lg: kitchenExposedBeamsBrickWallBefore2Lg, alt: "Dark-cabinet kitchen with exposed beams before the project", stage: "Before" },
      { sm: kitchenExposedBeamsBrickWallBefore3Sm, lg: kitchenExposedBeamsBrickWallBefore3Lg, alt: "Dark-cabinet kitchen with exposed beams before the project", stage: "Before" },
    ],
  },
  {
    id: "modern-gray-exterior",
    title: "Modern Gray Home Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: modernGrayExteriorInProgress1Sm, lg: modernGrayExteriorInProgress1Lg, alt: "Modern gray home exterior with ladders and a paver driveway during painting work", stage: "In progress" },
    ],
  },
  {
    id: "blue-craftsman-screened-porch",
    title: "Blue Craftsman With Screened Porch",
    category: "Exterior Painting",
    photos: [
      { sm: blueCraftsmanScreenedPorchFinished1Sm, lg: blueCraftsmanScreenedPorchFinished1Lg, alt: "Blue craftsman home with a screened front porch and white trim", stage: "Finished" },
      { sm: blueCraftsmanScreenedPorchFinished2Sm, lg: blueCraftsmanScreenedPorchFinished2Lg, alt: "Blue craftsman home with a screened porch and white trim, front view", stage: "Finished" },
      { sm: blueCraftsmanScreenedPorchFinished3Sm, lg: blueCraftsmanScreenedPorchFinished3Lg, alt: "Side of a blue home with white trim and a fenced yard", stage: "Finished" },
      { sm: blueCraftsmanScreenedPorchFinished4Sm, lg: blueCraftsmanScreenedPorchFinished4Lg, alt: "Blue home with white trim and dark French doors on a concrete step", stage: "Finished" },
      { sm: blueCraftsmanScreenedPorchBefore5Sm, lg: blueCraftsmanScreenedPorchBefore5Lg, alt: "Gray-blue home before the project, side view with a patio door", stage: "Before" },
      { sm: blueCraftsmanScreenedPorchBefore6Sm, lg: blueCraftsmanScreenedPorchBefore6Lg, alt: "Gray-blue craftsman home before the project with a screened porch", stage: "Before" },
      { sm: blueCraftsmanScreenedPorchBefore7Sm, lg: blueCraftsmanScreenedPorchBefore7Lg, alt: "Gray-blue home before the project, side view along a walkway", stage: "Before" },
      { sm: blueCraftsmanScreenedPorchInProgress8Sm, lg: blueCraftsmanScreenedPorchInProgress8Lg, alt: "Craftsman home with a screened porch and a ladder during exterior work", stage: "In progress" },
      { sm: blueCraftsmanScreenedPorchInProgress9Sm, lg: blueCraftsmanScreenedPorchInProgress9Lg, alt: "Blue-gray home with plastic covering over the front steps during painting work", stage: "In progress" },
      { sm: blueCraftsmanScreenedPorchInProgress10Sm, lg: blueCraftsmanScreenedPorchInProgress10Lg, alt: "Craftsman home with a screened porch and a ladder during exterior work", stage: "In progress" },
      { sm: blueCraftsmanScreenedPorchInProgress11Sm, lg: blueCraftsmanScreenedPorchInProgress11Lg, alt: "Blue-gray home with plastic covering and a ladder during exterior work", stage: "In progress" },
    ],
  },
  {
    id: "backyard-shed-exterior",
    title: "Backyard Shed Exterior",
    category: "Exterior Painting",
    photos: [
      { sm: backyardShedExteriorFinished1Sm, lg: backyardShedExteriorFinished1Lg, alt: "Cream backyard shed with black double doors and a paver patio", stage: "Finished" },
      { sm: backyardShedExteriorFinished2Sm, lg: backyardShedExteriorFinished2Lg, alt: "Side of a cream shed with white trim and a gable roof", stage: "Finished" },
      { sm: backyardShedExteriorFinished3Sm, lg: backyardShedExteriorFinished3Lg, alt: "Cream shed with a dark screen panel and a paver patio", stage: "Finished" },
      { sm: backyardShedExteriorBefore4Sm, lg: backyardShedExteriorBefore4Lg, alt: "Wood-sided shed before the project with a paver patio", stage: "Before" },
      { sm: backyardShedExteriorBefore5Sm, lg: backyardShedExteriorBefore5Lg, alt: "Wood shed with a plywood panel before the project", stage: "Before" },
      { sm: backyardShedExteriorBefore6Sm, lg: backyardShedExteriorBefore6Lg, alt: "Wood-sided shed before the project on a lawn", stage: "Before" },
      { sm: backyardShedExteriorInProgress7Sm, lg: backyardShedExteriorInProgress7Lg, alt: "White shed with double doors during painting work", stage: "In progress" },
      { sm: backyardShedExteriorInProgress8Sm, lg: backyardShedExteriorInProgress8Lg, alt: "Shed with a dark screen panel and plastic covering during painting work", stage: "In progress" },
    ],
  },
  {
    id: "brick-two-story-home",
    title: "Brick Two-Story Home",
    category: "Exterior Painting",
    photos: [
      { sm: brickTwoStoryHomeFinished1Sm, lg: brickTwoStoryHomeFinished1Lg, alt: "Two-story brick home with cream trim and a gray upper section", stage: "Finished" },
      { sm: brickTwoStoryHomeFinished2Sm, lg: brickTwoStoryHomeFinished2Lg, alt: "Garage with brown siding and a gravel driveway", stage: "Finished" },
      { sm: brickTwoStoryHomeFinished3Sm, lg: brickTwoStoryHomeFinished3Lg, alt: "Brick front porch with a wood ceiling and a dark front door", stage: "Finished" },
      { sm: brickTwoStoryHomeBefore4Sm, lg: brickTwoStoryHomeBefore4Lg, alt: "Stucco side wall with windows before the project", stage: "Before" },
      { sm: brickTwoStoryHomeBefore5Sm, lg: brickTwoStoryHomeBefore5Lg, alt: "Brick two-story home before the project with a dark garage door", stage: "Before" },
      { sm: brickTwoStoryHomeInProgress6Sm, lg: brickTwoStoryHomeInProgress6Lg, alt: "Two workers on a ladder painting the side of a brick home", stage: "In progress" },
      { sm: brickTwoStoryHomeInProgress7Sm, lg: brickTwoStoryHomeInProgress7Lg, alt: "Brick home with painter's tape and plastic over the windows during work", stage: "In progress" },
      { sm: brickTwoStoryHomeInProgress8Sm, lg: brickTwoStoryHomeInProgress8Lg, alt: "Painter working on a white column at a brick porch", stage: "In progress" },
    ],
  },
  {
    id: "brick-yellow-entry",
    title: "Brick and Yellow Entry",
    category: "Exterior Painting",
    photos: [
      { sm: brickYellowEntryFinished1Sm, lg: brickYellowEntryFinished1Lg, alt: "Angled window and yellow soffit beside a brick wall", stage: "Finished" },
      { sm: brickYellowEntryBefore2Sm, lg: brickYellowEntryBefore2Lg, alt: "Yellow soffit and window before the project", stage: "Before" },
      { sm: brickYellowEntryBefore3Sm, lg: brickYellowEntryBefore3Lg, alt: "Yellow soffit with a vent and a window before the project", stage: "Before" },
    ],
  },
  {
    id: "open-living-area",
    title: "Open Living Area",
    category: "Interior Painting",
    photos: [
      { sm: openLivingAreaFinished1Sm, lg: openLivingAreaFinished1Lg, alt: "Living room with a fireplace, white walls and a wood floor", stage: "Finished" },
      { sm: openLivingAreaFinished2Sm, lg: openLivingAreaFinished2Lg, alt: "Open living area with white walls, a kitchen pass-through and wood floors", stage: "Finished" },
      { sm: openLivingAreaBefore3Sm, lg: openLivingAreaBefore3Lg, alt: "Living room with a blue accent wall and a fireplace before the project", stage: "Before" },
      { sm: openLivingAreaInProgress4Sm, lg: openLivingAreaInProgress4Lg, alt: "Room with blue painter's tape and drop cloths during painting work", stage: "In progress" },
    ],
  },
  {
    id: "white-siding-stair-entry",
    title: "White Siding and Stair Entry",
    category: "Exterior Painting",
    photos: [
      { sm: whiteSidingStairEntryFinished1Sm, lg: whiteSidingStairEntryFinished1Lg, alt: "White-siding entry with a stone walkway and a brown door", stage: "Finished" },
      { sm: whiteSidingStairEntryFinished2Sm, lg: whiteSidingStairEntryFinished2Lg, alt: "White-siding home with a brown canopy and railing at the entry", stage: "Finished" },
      { sm: whiteSidingStairEntryFinished3Sm, lg: whiteSidingStairEntryFinished3Lg, alt: "White siding with a brown canopy and a stair entry", stage: "Finished" },
      { sm: whiteSidingStairEntryBefore4Sm, lg: whiteSidingStairEntryBefore4Lg, alt: "White-siding home before the project with a wood deck and a canopy", stage: "Before" },
      { sm: whiteSidingStairEntryBefore5Sm, lg: whiteSidingStairEntryBefore5Lg, alt: "White home before the project with a stone pile and a white fence", stage: "Before" },
      { sm: whiteSidingStairEntryBefore6Sm, lg: whiteSidingStairEntryBefore6Lg, alt: "White-siding side yard before the project with a fence and a downspout", stage: "Before" },
      { sm: whiteSidingStairEntryBefore7Sm, lg: whiteSidingStairEntryBefore7Lg, alt: "White home side before the project with a window and a round vent", stage: "Before" },
      { sm: whiteSidingStairEntryInProgress8Sm, lg: whiteSidingStairEntryInProgress8Lg, alt: "Worker in white coveralls painting window trim on white siding", stage: "In progress" },
    ],
  },
  {
    id: "blue-craftsman-deck",
    title: "Blue Craftsman and Deck",
    category: "Exterior Painting",
    photos: [
      { sm: blueCraftsmanDeckFinished1Sm, lg: blueCraftsmanDeckFinished1Lg, alt: "Blue-siding craftsman home with white trim and a porch railing", stage: "Finished" },
      { sm: blueCraftsmanDeckFinished2Sm, lg: blueCraftsmanDeckFinished2Lg, alt: "Blue home with white trim and an open deck", stage: "Finished" },
      { sm: blueCraftsmanDeckFinished3Sm, lg: blueCraftsmanDeckFinished3Lg, alt: "Blue craftsman home with a white porch and a shrub out front", stage: "Finished" },
      { sm: blueCraftsmanDeckBefore4Sm, lg: blueCraftsmanDeckBefore4Lg, alt: "Blue home before the project with a gray wood deck", stage: "Before" },
      { sm: blueCraftsmanDeckBefore5Sm, lg: blueCraftsmanDeckBefore5Lg, alt: "Blue craftsman home before the project with a white porch", stage: "Before" },
      { sm: blueCraftsmanDeckBefore6Sm, lg: blueCraftsmanDeckBefore6Lg, alt: "Blue home wall with a detached garage before the project", stage: "Before" },
      { sm: blueCraftsmanDeckBefore7Sm, lg: blueCraftsmanDeckBefore7Lg, alt: "Blue home side with a pergola before the project", stage: "Before" },
      { sm: blueCraftsmanDeckInProgress8Sm, lg: blueCraftsmanDeckInProgress8Lg, alt: "Blue craftsman home with a ladder during exterior work", stage: "In progress" },
      { sm: blueCraftsmanDeckInProgress9Sm, lg: blueCraftsmanDeckInProgress9Lg, alt: "Blue craftsman home with a worker on the deck during work", stage: "In progress" },
      { sm: blueCraftsmanDeckInProgress10Sm, lg: blueCraftsmanDeckInProgress10Lg, alt: "Blue craftsman home with a ladder and scaffold during exterior work", stage: "In progress" },
    ],
  },
  {
    id: "green-bungalow-trim",
    title: "Green Bungalow Trim and Railings",
    category: "Exterior Painting",
    photos: [
      { sm: greenBungalowTrimFinished1Sm, lg: greenBungalowTrimFinished1Lg, alt: "Green bungalow siding with white window trim beside brick", stage: "Finished" },
      { sm: greenBungalowTrimFinished2Sm, lg: greenBungalowTrimFinished2Lg, alt: "Green bungalow corner with white window trim and shrubs", stage: "Finished" },
      { sm: greenBungalowTrimFinished3Sm, lg: greenBungalowTrimFinished3Lg, alt: "Green detached garage with a white door and gable trim", stage: "Finished" },
      { sm: greenBungalowTrimFinished4Sm, lg: greenBungalowTrimFinished4Lg, alt: "Green bungalow front with white porch railings and steps", stage: "Finished" },
      { sm: greenBungalowTrimBefore5Sm, lg: greenBungalowTrimBefore5Lg, alt: "Green bungalow side before the project with a window well", stage: "Before" },
      { sm: greenBungalowTrimBefore6Sm, lg: greenBungalowTrimBefore6Lg, alt: "Green detached garage before the project with a white door", stage: "Before" },
      { sm: greenBungalowTrimBefore7Sm, lg: greenBungalowTrimBefore7Lg, alt: "Porch railing and steps before the project", stage: "Before" },
      { sm: greenBungalowTrimBefore8Sm, lg: greenBungalowTrimBefore8Lg, alt: "Green bungalow front before the project with a planter box on the porch", stage: "Before" },
      { sm: greenBungalowTrimBefore9Sm, lg: greenBungalowTrimBefore9Lg, alt: "Porch railing and steps before the project beside a gate", stage: "Before" },
      { sm: greenBungalowTrimInProgress10Sm, lg: greenBungalowTrimInProgress10Lg, alt: "Worker sanding porch railings during trim work", stage: "In progress" },
      { sm: greenBungalowTrimInProgress11Sm, lg: greenBungalowTrimInProgress11Lg, alt: "Drop cloth and tape on a porch deck during trim work", stage: "In progress" },
      { sm: greenBungalowTrimInProgress12Sm, lg: greenBungalowTrimInProgress12Lg, alt: "Newly installed porch railing with wood steps during trim work", stage: "In progress" },
    ],
  },
  {
    id: "gray-gambrel-home",
    title: "Gray Gambrel Home",
    category: "Exterior Painting",
    photos: [
      { sm: grayGambrelHomeFinished1Sm, lg: grayGambrelHomeFinished1Lg, alt: "Gray gambrel home with white trim and a dormer balcony", stage: "Finished" },
      { sm: grayGambrelHomeFinished2Sm, lg: grayGambrelHomeFinished2Lg, alt: "Front door and porch of a gray gambrel home with cream trim", stage: "Finished" },
      { sm: grayGambrelHomeFinished3Sm, lg: grayGambrelHomeFinished3Lg, alt: "Gray gambrel home with a white stair rail up to the entry", stage: "Finished" },
      { sm: grayGambrelHomeFinished4Sm, lg: grayGambrelHomeFinished4Lg, alt: "Gray gambrel home with bamboo and a white railing", stage: "Finished" },
      { sm: grayGambrelHomeFinished5Sm, lg: grayGambrelHomeFinished5Lg, alt: "Dormer and bay window on a gray gambrel home", stage: "Finished" },
      { sm: grayGambrelHomeBefore6Sm, lg: grayGambrelHomeBefore6Lg, alt: "Gray gambrel home before the project with a white railing", stage: "Before" },
      { sm: grayGambrelHomeBefore7Sm, lg: grayGambrelHomeBefore7Lg, alt: "Porch and entry of a gray home before the project", stage: "Before" },
      { sm: grayGambrelHomeInProgress8Sm, lg: grayGambrelHomeInProgress8Lg, alt: "Worker painting siding at a gray gambrel home", stage: "In progress" },
      { sm: grayGambrelHomeInProgress9Sm, lg: grayGambrelHomeInProgress9Lg, alt: "Worker on a ladder at the roofline of a gray gambrel home", stage: "In progress" },
    ],
  },
  {
    id: "red-cedar-shingle-home",
    title: "Red Cedar Shingle Home",
    category: "Exterior Painting",
    photos: [
      { sm: redCedarShingleHomeFinished1Sm, lg: redCedarShingleHomeFinished1Lg, alt: "Red-brown deck railing beside a driveway", stage: "Finished" },
      { sm: redCedarShingleHomeFinished2Sm, lg: redCedarShingleHomeFinished2Lg, alt: "Red cedar-shingle home with white windows and a garden bed", stage: "Finished" },
      { sm: redCedarShingleHomeFinished3Sm, lg: redCedarShingleHomeFinished3Lg, alt: "Red cedar-shingle home with a concrete walkway and a rock wall", stage: "Finished" },
      { sm: redCedarShingleHomeFinished4Sm, lg: redCedarShingleHomeFinished4Lg, alt: "Red cedar-shingle home with a side deck and stairs", stage: "Finished" },
      { sm: redCedarShingleHomeFinished5Sm, lg: redCedarShingleHomeFinished5Lg, alt: "Red cedar-shingle home with a covered deck and white windows", stage: "Finished" },
      { sm: redCedarShingleHomeBefore6Sm, lg: redCedarShingleHomeBefore6Lg, alt: "Cedar-shingle home with a covered deck before the project", stage: "Before" },
      { sm: redCedarShingleHomeBefore7Sm, lg: redCedarShingleHomeBefore7Lg, alt: "Cedar-shingle home side before the project with a chimney", stage: "Before" },
      { sm: redCedarShingleHomeBefore8Sm, lg: redCedarShingleHomeBefore8Lg, alt: "Cedar-shingle home corner before the project with hydrangeas", stage: "Before" },
      { sm: redCedarShingleHomeBefore9Sm, lg: redCedarShingleHomeBefore9Lg, alt: "Cedar-shingle home with a deck and window before the project", stage: "Before" },
      { sm: redCedarShingleHomeInProgress10Sm, lg: redCedarShingleHomeInProgress10Lg, alt: "Home with a ladder and plastic covering during exterior work", stage: "In progress" },
    ],
  },
  {
    id: "navy-siding-side",
    title: "Navy Siding, Side Yard",
    category: "Exterior Painting",
    photos: [
      { sm: navySidingSideFinished1Sm, lg: navySidingSideFinished1Lg, alt: "Navy lap siding and white window trim along a narrow side yard", stage: "Finished" },
      { sm: navySidingSideFinished2Sm, lg: navySidingSideFinished2Lg, alt: "Navy siding with a white sill and a corner", stage: "Finished" },
      { sm: navySidingSideFinished3Sm, lg: navySidingSideFinished3Lg, alt: "Navy siding on the upper section of a two-story home", stage: "Finished" },
      { sm: navySidingSideFinished4Sm, lg: navySidingSideFinished4Lg, alt: "Navy siding beside a fence and an outdoor heat pump", stage: "Finished" },
      { sm: navySidingSideFinished5Sm, lg: navySidingSideFinished5Lg, alt: "Navy siding with white window trim on a side wall", stage: "Finished" },
      { sm: navySidingSidePhoto6Sm, lg: navySidingSidePhoto6Lg, alt: "Navy siding beside a window on a two-story home" },
      { sm: navySidingSidePhoto7Sm, lg: navySidingSidePhoto7Lg, alt: "Navy siding and a window on a two-story home" },
      { sm: navySidingSidePhoto8Sm, lg: navySidingSidePhoto8Lg, alt: "Navy siding with a window and a corner on a two-story home" },
      { sm: navySidingSideInProgress9Sm, lg: navySidingSideInProgress9Lg, alt: "Narrow side yard with tarps and a yellow drop cloth during work", stage: "In progress" },
      { sm: navySidingSideInProgress10Sm, lg: navySidingSideInProgress10Lg, alt: "Narrow side yard with plastic and tarps during exterior work", stage: "In progress" },
    ],
  },
  {
    id: "brick-chimney",
    title: "Brick Chimney",
    category: "Exterior Painting",
    photos: [
      { sm: brickChimneyFinished1Sm, lg: brickChimneyFinished1Lg, alt: "Chimney painted dark gray-blue beside a tan-siding home", stage: "Finished" },
      { sm: brickChimneyBefore2Sm, lg: brickChimneyBefore2Lg, alt: "Tan-siding home with an unpainted brick chimney before the project", stage: "Before" },
    ],
  },
  {
    id: "whole-home-interior",
    title: "Whole-Home Interior Refresh",
    category: "Interior Painting",
    photos: [
      { sm: wholeHomeInteriorFinished1Sm, lg: wholeHomeInteriorFinished1Lg, alt: "Living room with hardwood floors and a wooden table", stage: "Finished" },
      { sm: wholeHomeInteriorFinished2Sm, lg: wholeHomeInteriorFinished2Lg, alt: "Coffered-ceiling living room with hardwood floors and a yellow pendant light", stage: "Finished" },
      { sm: wholeHomeInteriorFinished3Sm, lg: wholeHomeInteriorFinished3Lg, alt: "Built-in white shelving beside a pass-through to a kitchen", stage: "Finished" },
      { sm: wholeHomeInteriorFinished4Sm, lg: wholeHomeInteriorFinished4Lg, alt: "Open living room with a sectional sofa and a kitchen beyond", stage: "Finished" },
      { sm: wholeHomeInteriorFinished5Sm, lg: wholeHomeInteriorFinished5Lg, alt: "Hallway with white trim and a window at the end", stage: "Finished" },
      { sm: wholeHomeInteriorFinished6Sm, lg: wholeHomeInteriorFinished6Lg, alt: "Entry with a coffered ceiling and a staircase", stage: "Finished" },
      { sm: wholeHomeInteriorFinished7Sm, lg: wholeHomeInteriorFinished7Lg, alt: "Living room with a sectional sofa and a yellow pendant light", stage: "Finished" },
      { sm: wholeHomeInteriorPhoto8Sm, lg: wholeHomeInteriorPhoto8Lg, alt: "Living room with hardwood floors and a sectional sofa" },
      { sm: wholeHomeInteriorPhoto9Sm, lg: wholeHomeInteriorPhoto9Lg, alt: "Living room with a sectional sofa and French doors" },
      { sm: wholeHomeInteriorPhoto10Sm, lg: wholeHomeInteriorPhoto10Lg, alt: "Kitchen with gray cabinets and a gas range" },
      { sm: wholeHomeInteriorPhoto11Sm, lg: wholeHomeInteriorPhoto11Lg, alt: "Hallway with white trim and a closed door" },
      { sm: wholeHomeInteriorPhoto12Sm, lg: wholeHomeInteriorPhoto12Lg, alt: "Dining room with a coffered ceiling and a yellow pendant light" },
      { sm: wholeHomeInteriorPhoto13Sm, lg: wholeHomeInteriorPhoto13Lg, alt: "Bay-window dining area with a wooden table" },
      { sm: wholeHomeInteriorPhoto14Sm, lg: wholeHomeInteriorPhoto14Lg, alt: "Kitchen with gray cabinets and a gas range" },
      { sm: wholeHomeInteriorPhoto15Sm, lg: wholeHomeInteriorPhoto15Lg, alt: "Built-in white cabinetry beside a wood table" },
      { sm: wholeHomeInteriorPhoto16Sm, lg: wholeHomeInteriorPhoto16Lg, alt: "Living room with a coffered ceiling and a window seat" },
      { sm: wholeHomeInteriorInProgress17Sm, lg: wholeHomeInteriorInProgress17Lg, alt: "Kitchen with plastic-covered cabinets during painting work", stage: "In progress" },
      { sm: wholeHomeInteriorInProgress18Sm, lg: wholeHomeInteriorInProgress18Lg, alt: "Hallway with blue painter's tape and a worker on a ladder", stage: "In progress" },
      { sm: wholeHomeInteriorInProgress19Sm, lg: wholeHomeInteriorInProgress19Lg, alt: "Built-in shelving covered with plastic during painting work", stage: "In progress" },
      { sm: wholeHomeInteriorInProgress20Sm, lg: wholeHomeInteriorInProgress20Lg, alt: "Bay-window room with blue tape and drop cloths during work", stage: "In progress" },
      { sm: wholeHomeInteriorInProgress21Sm, lg: wholeHomeInteriorInProgress21Lg, alt: "Living room with a worker and a ladder during painting", stage: "In progress" },
    ],
  },
  {
    id: "bedroom-walls",
    title: "Bedroom Walls",
    category: "Interior Painting",
    photos: [
      { sm: bedroomWallsFinished1Sm, lg: bedroomWallsFinished1Lg, alt: "Bedroom after painting, interior view", stage: "Finished" },
      { sm: bedroomWallsFinished2Sm, lg: bedroomWallsFinished2Lg, alt: "Bedroom with an orange-toned accent wall and a view of a patio and pool", stage: "Finished" },
      { sm: bedroomWallsFinished3Sm, lg: bedroomWallsFinished3Lg, alt: "Stair landing with lavender walls and a patterned stair runner", stage: "Finished" },
      { sm: bedroomWallsFinished4Sm, lg: bedroomWallsFinished4Lg, alt: "Bedroom after painting with a bed and a wood dresser", stage: "Finished" },
      { sm: bedroomWallsBefore5Sm, lg: bedroomWallsBefore5Lg, alt: "Bedroom before the project with a built-in closet door", stage: "Before" },
      { sm: bedroomWallsBefore6Sm, lg: bedroomWallsBefore6Lg, alt: "Bedroom before the project with a window and painter's supplies", stage: "Before" },
      { sm: bedroomWallsBefore7Sm, lg: bedroomWallsBefore7Lg, alt: "Bedroom before the project with a soffit and a closet opening", stage: "Before" },
      { sm: bedroomWallsInProgress8Sm, lg: bedroomWallsInProgress8Lg, alt: "Bedroom with a window and walls being prepared during work", stage: "In progress" },
      { sm: bedroomWallsInProgress9Sm, lg: bedroomWallsInProgress9Lg, alt: "Bedroom with plastic and drop cloths during painting work", stage: "In progress" },
      { sm: bedroomWallsInProgress10Sm, lg: bedroomWallsInProgress10Lg, alt: "Worker preparing a wall in a bedroom during painting work", stage: "In progress" },
    ],
  },
  {
    id: "blue-two-story-front",
    title: "Blue Two-Story Front",
    category: "Exterior Painting",
    photos: [
      { sm: blueTwoStoryFrontFinished1Sm, lg: blueTwoStoryFrontFinished1Lg, alt: "Blue two-story home with a white garage door and a brick planter", stage: "Finished" },
      { sm: blueTwoStoryFrontFinished2Sm, lg: blueTwoStoryFrontFinished2Lg, alt: "Blue two-story home with a covered entry and white railing", stage: "Finished" },
      { sm: blueTwoStoryFrontBefore3Sm, lg: blueTwoStoryFrontBefore3Lg, alt: "Blue two-story home before the project with a brick planter", stage: "Before" },
    ],
  },
  {
    id: "teal-craftsman",
    title: "Teal Craftsman Home",
    category: "Exterior Painting",
    photos: [
      { sm: tealCraftsmanFinished1Sm, lg: tealCraftsmanFinished1Lg, alt: "Teal craftsman home with a white covered porch and a red-brick base", stage: "Finished" },
      { sm: tealCraftsmanFinished2Sm, lg: tealCraftsmanFinished2Lg, alt: "Teal craftsman home with a white railing and a gabled roof", stage: "Finished" },
      { sm: tealCraftsmanFinished3Sm, lg: tealCraftsmanFinished3Lg, alt: "Teal craftsman home with a covered porch", stage: "Finished" },
      { sm: tealCraftsmanBefore4Sm, lg: tealCraftsmanBefore4Lg, alt: "Teal craftsman home before the project, rear view", stage: "Before" },
      { sm: tealCraftsmanBefore5Sm, lg: tealCraftsmanBefore5Lg, alt: "Teal home with a gabled upper section before the project", stage: "Before" },
      { sm: tealCraftsmanBefore6Sm, lg: tealCraftsmanBefore6Lg, alt: "Teal home with a bay window and a concrete patio before the project", stage: "Before" },
      { sm: tealCraftsmanInProgress7Sm, lg: tealCraftsmanInProgress7Lg, alt: "Teal home with a ladder and a worktable during exterior work", stage: "In progress" },
    ],
  },
  {
    id: "white-stucco-ranch",
    title: "White Stucco Ranch",
    category: "Exterior Painting",
    photos: [
      { sm: whiteStuccoRanchFinished1Sm, lg: whiteStuccoRanchFinished1Lg, alt: "White stucco ranch home with a sliding patio door and concrete steps", stage: "Finished" },
      { sm: whiteStuccoRanchFinished2Sm, lg: whiteStuccoRanchFinished2Lg, alt: "White stucco ranch home with a window and a dark gutter", stage: "Finished" },
      { sm: whiteStuccoRanchFinished3Sm, lg: whiteStuccoRanchFinished3Lg, alt: "Single-story stucco home with a dark front door and lawn", stage: "Finished" },
      { sm: whiteStuccoRanchFinished4Sm, lg: whiteStuccoRanchFinished4Lg, alt: "White stucco side yard with a patio and sliding door", stage: "Finished" },
      { sm: whiteStuccoRanchFinished5Sm, lg: whiteStuccoRanchFinished5Lg, alt: "White stucco home side with a dark gutter and a meter box", stage: "Finished" },
      { sm: whiteStuccoRanchBefore6Sm, lg: whiteStuccoRanchBefore6Lg, alt: "Beige stucco home side before the project with plastic covering", stage: "Before" },
      { sm: whiteStuccoRanchBefore7Sm, lg: whiteStuccoRanchBefore7Lg, alt: "Beige stucco home with a window before the project", stage: "Before" },
      { sm: whiteStuccoRanchBefore8Sm, lg: whiteStuccoRanchBefore8Lg, alt: "Stucco wall corner with a round window before the project", stage: "Before" },
      { sm: whiteStuccoRanchBefore9Sm, lg: whiteStuccoRanchBefore9Lg, alt: "Stucco home side with a sliding door before the project", stage: "Before" },
      { sm: whiteStuccoRanchBefore10Sm, lg: whiteStuccoRanchBefore10Lg, alt: "Wood-sided outbuilding with a window before the project", stage: "Before" },
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
