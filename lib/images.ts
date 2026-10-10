/**
 * Central image registry.
 *
 * Remote photographs are requested at large widths so that next/image has a
 * genuinely high-resolution source to build its srcset from (down to mobile,
 * up to 4K displays). Every id below has been checked to resolve.
 */
const BASE = "https://images.unsplash.com/";

function photo(id: string, w = 2400, q = 82) {
  return `${BASE}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  /** The Shiva–Shakti (Ardhanarishvara) mural — the hero banner. */
  heroMural: "/images/hero-shiva-shakti.webp",

  sunriseMeditation: photo("photo-1506126613408-eca07ce68773", 3200),
  sunsetWarrior: photo("photo-1544367567-0f2fcb009e0b", 3200),
  beachGroup: photo("photo-1545205597-3d9d02c29597", 2800),
  pigeonPose: photo("photo-1575052814086-f385e2e2ad1b", 2000),
  oceanAerial: photo("photo-1540206395-68808572332f", 3200),
  downwardDog: photo("photo-1599901860904-17e6ed7083a0", 2000),
  lotusSeated: photo("photo-1552196563-55cd4e45efb3", 2000),
  studioWarriors: photo("photo-1588286840104-8957b019727f", 2400),
  propsFlatlay: photo("photo-1591291621164-2c6367723315", 1800),
  plankClass: photo("photo-1518611012118-696072aa579a", 2000),
  coreClass: photo("photo-1571019613454-1cb2f99b2d8b", 2000),
  outdoorCommunity: photo("photo-1549576490-b0b4831ef60a", 2800),
  namasteBack: photo("photo-1510894347713-fc3ed6fdf539", 2400),
  mountainDusk: photo("photo-1506744038136-46273834b3fb", 3200),
  meditationGarden: photo("photo-1562088287-bde35a1ea917", 2400),
  eagleTwist: photo("photo-1593164842264-854604db2260", 2000),
  groupNamaste: photo("photo-1529693662653-9d480530a697", 2400),
  sunriseHills: photo("photo-1494548162494-384bba4ab999", 3200),
  handstandArches: photo("photo-1603988363607-e1e4a66962c6", 2000),
  flowClass: photo("photo-1552286450-4a669f880062", 2400),
  groupFloorClass: photo("photo-1599447421416-3414500d18a5", 2400),
  deepFold: photo("photo-1593810450967-f9c42742e326", 2000),
  treePoseHill: photo("photo-1545389336-cf090694435e", 2800),
  malaSeated: photo("photo-1591343395902-1adcb454c4e2", 2000),
  rolledMats: photo("photo-1601925260368-ae2f83cf8b7f", 2000),
  ayurvedaTherapy: photo("photo-1596178060671-7a80dc8059ea", 2000),
  satvikFood: photo("photo-1515023115689-589c33041d3c", 1800),

  // Portraits
  portraitWomanWarm: photo("photo-1494790108377-be9c29b29330", 900, 85),
  portraitWomanCalm: photo("photo-1534528741775-53994a69daeb", 900, 85),
  portraitWomanSoft: photo("photo-1544005313-94ddf0286df2", 900, 85),
  portraitManWarm: photo("photo-1500648767791-00dcc994a43e", 900, 85),
  portraitManSenior: photo("photo-1472099645785-5658abf4ff4e", 900, 85),
  portraitManSmile: photo("photo-1507003211169-0a1dd7228f2d", 900, 85),
  portraitWomanShort: photo("photo-1438761681033-6461ffad8d80", 900, 85),
  portraitWomanPro: photo("photo-1573496359142-b8d87734a5a2", 900, 85),
  portraitWomanBright: photo("photo-1580489944761-15a19d654956", 900, 85),
  portraitManBeard: photo("photo-1607990281513-2c110a25bd8c", 900, 85),
} as const;

export type ImageKey = keyof typeof IMG;
