import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="flex flex-row-reverse">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-line-700">EN</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>FI</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Button className="bg-lime-500" variant="outline">CONTACT</Button>
        </NavigationMenuList>
      </NavigationMenu>
      
    </div>
    
      <div className="BOX"></div>
      <div className="USERNAME m-7"></div>
    </>
  );
}
