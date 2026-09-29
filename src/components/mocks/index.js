import { PizzaOraSite, PizzaOraMobile } from "./PizzaOraMock";
import { SushiHeroSite, SushiHeroMobile } from "./SushiHeroMock";
import { CroustyTakawaSite, CroustyTakawaMobile } from "./CroustyMock";
import { CafeSahelSite, CafeSahelMobile } from "./CafeSahelMock";
import { MenuEngineSite, MenuEngineMobile } from "./MenuEngineMock";

/** project.mock → the components rendered inside the device frames */
export const mocks = {
  pizza: { Site: PizzaOraSite, Mobile: PizzaOraMobile },
  sushi: { Site: SushiHeroSite, Mobile: SushiHeroMobile },
  crousty: { Site: CroustyTakawaSite, Mobile: CroustyTakawaMobile },
  cafe: { Site: CafeSahelSite, Mobile: CafeSahelMobile },
  engine: { Site: MenuEngineSite, Mobile: MenuEngineMobile },
};
