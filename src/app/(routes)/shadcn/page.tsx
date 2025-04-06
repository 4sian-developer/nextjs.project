import { Button } from "react-day-picker";
import { AccordionDemo } from "./_ui/accordion";
import { AlertDemo, AlertDestructive } from "./_ui/alert";
import { AlertDialogDemo } from "./_ui/alert-dialog";
import { AspectRatioDemo } from "./_ui/apect-ratio";
import { AvatarDemo } from "./_ui/avatar";
import { BadgeDemo, BadgeDestructive, BadgeOutline, BadgeSecondary } from "./_ui/badge";
import { BreadcrumbCollapsed, BreadcrumbDemo, BreadcrumbWithCustomSeparator, BreadcrumbWithDropdown } from "./_ui/breadcrumb";
import { ButtonDemo, ButtonDestructive, ButtonGhost, ButtonIcon, ButtonLink, ButtonLoading, ButtonOutline, ButtonSecondary, ButtonWithIcon } from "./_ui/button";
import { CalendarDemo } from "./_ui/calendar";
import { CardWithForm } from "./_ui/card";
import { CarouselDApiDemo, CarouselOrientation, CarouselSize, CarouselSpacing } from "./_ui/carousel";
import { CheckboxDemo, CheckboxReactHookFormMultiple, CheckboxReactHookFormSingle, CheckboxWithText } from "./_ui/checkbox";
import { CollapsibleDemo } from "./_ui/collapsible";
import { ComboboxDemo, ComboboxPopover } from "./_ui/combobox";
import { CommandDemo, CommandDialogDemo } from "./_ui/command";
import { ContextMenuDemo } from "./_ui/context-menu";
import { DataTableDemo } from "./_ui/data-table";
import { DatePickerWithPresets, DatePickerWithRange } from "./_ui/date-range-picker";
import { DialogDemo } from "./_ui/dialog-window";
import { DrawerDemo } from "./_ui/drawer";
import { DropdownMenuCheckboxes } from "./_ui/dropdown-menu-checkbox";
import { DropdownMenuRadioGroupDemo } from "./_ui/dropdown-menu-radio";
import { DropdownMenuDemo } from "./_ui/dropdown-menu";
import { InputForm } from "./_ui/form";
import { HoverCardDemo } from "./_ui/hover-card";
import { InputOTPDemo } from "./_ui/input-otp";
import { InputDemo, InputDisabled, InputFile, InputWithButton, InputWithLabel } from "./_ui/input";
import { LabelDemo } from "./_ui/label";
import { MenubarDemo } from "./_ui/menu-bar";
import { NavigationMenuDemo } from "./_ui/navigation-menu";
import { PaginationDemo } from "./_ui/pagination";
import { PopoverDemo } from "./_ui/popover";
import { ProgressDemo } from "./_ui/progress-bar";
import { RadioGroupDemo } from "./_ui/radio-group";
import { ResizableDemo } from "./_ui/resizable";
import { DrawerDialogDemo } from "./_ui/responsive-dialog";
import { ScrollAreaHorizontalDemo } from "./_ui/scroll-area-horizontal";
import { ScrollAreaDemo } from "./_ui/scroll-area";
import { SelectForm } from "./_ui/select-form";
import { SelectDemo } from "./_ui/select";
import { SeparatorDemo } from "./_ui/separator";
import { SheetDemo } from "./_ui/sheet";
import { AppSidebar } from "./_ui/sidebar";
import { SkeletonCard, SkeletonDemo } from "./_ui/skeleton";
import { SliderDemo } from "./_ui/slider";
import { SonnerDemo } from "./_ui/sonner";
import { SwitchForm } from "./_ui/switch-form";
import { SwitchDemo } from "./_ui/switch";
import { TableDemo } from "./_ui/table";
import { TabsDemo } from "./_ui/tabs";
import { TextareaDemo } from "./_ui/textarea";
import { TextareaForm } from "./_ui/textarea-form";
import { LargeToggleGroupDemo, OutlineToggleGroupDemo, SingleToggleGroupDemo, SmallToggleGroupDemo, ToggleGroupDemo } from "./_ui/toggle-group";
import { ToggleDemo, ToggleOutline, ToggleWithText } from "./_ui/toggle";
import { TooltipDemo } from "./_ui/tooltip";
import { TooltipInCopyExample } from "../react-bootstrap/_ui/overlay-tooltip";
import { ToolbarBasicExample } from "../react-bootstrap/_ui/button-group";

//? Inline Style (Style Object)
const Heading = {
  fontSize: '2rem',
  padding: '2rem 0 1rem 0',
};

export default function ShadcnPage() {
  return (
    <main style={{ margin: '2rem 2rem'}}>
      <small>Shadcn UI Library</small>
      <h1 style={{ fontSize: '3rem' }}>Shadcn UI</h1>
      <h2 style={Heading}>Accordion Demo</h2>
      <AccordionDemo />
      <h2 style={Heading}>Alert Demo</h2>
      <AlertDemo />
      <AlertDestructive />
      <h2 style={Heading}>Alert Dialog Demo</h2>
      <AlertDialogDemo />
      <h2 style={Heading}>Aspect Ratio Demo</h2>
      <AspectRatioDemo />
      <h2 style={Heading}>Avatar Demo</h2>
      <AvatarDemo />
      <h2 style={Heading}>Badge Demo</h2>
      <BadgeDemo />
      <BadgeSecondary />
      <BadgeOutline />
      <BadgeDestructive />
      <h2 style={Heading}>Breadcrumb Demo</h2>
      <BreadcrumbDemo />
      <BreadcrumbWithCustomSeparator />
      <BreadcrumbWithDropdown />
      <BreadcrumbCollapsed />
      <h2 style={Heading}>Button Demo</h2>
      <ButtonDemo />
      <ButtonSecondary />
      <ButtonDestructive />
      <ButtonOutline />
      <ButtonGhost />
      <ButtonLink />
      <ButtonIcon />
      <ButtonWithIcon />
      <ButtonLoading />
      <h2 style={Heading}>Calendar Demo</h2>
      <CalendarDemo />
      <h2 style={Heading}>Card Demo</h2>
      <CardWithForm />
      <h2 style={Heading}>Carousel Demo</h2>
      <CarouselSize />
      <CarouselSpacing />
      <CarouselOrientation />
      {/* <CarouselDApiDemo /> */}
      <h2 style={Heading}>Checkbox Demo</h2>
      {/* <CheckboxDemo /> */}
      <CheckboxWithText />
      <CheckboxReactHookFormSingle />
      <CheckboxReactHookFormMultiple />
      <h2 style={Heading}>Collapsible Demo</h2>
      <CollapsibleDemo />
      <h2 style={Heading}>Combobox Demo</h2>
      <ComboboxDemo />
      <ComboboxPopover />
      <h2 style={Heading}>Command Demo</h2>
      {/* <CommandDemo /> */}
      <CommandDialogDemo />
      <p>ctrl + j</p>
      <h2 style={Heading}>Context Menu Demo</h2>
      <ContextMenuDemo />
      <h2 style={Heading}>Data Table Demo</h2>
      <DataTableDemo />
      <h2 style={Heading}>Date Picker Demo</h2>
      <DatePickerWithPresets />
      <DatePickerWithRange />
      <h2 style={Heading}>Dialog Window Demo</h2>
      <DialogDemo />
      <h2 style={Heading}>Drawer Demo</h2>
      <DrawerDemo />
      <h2 style={Heading}>Dropdown Menu Demo</h2>
      <DropdownMenuCheckboxes />
      <DropdownMenuRadioGroupDemo />
      <DropdownMenuDemo />
      <h2 style={Heading}>Form Demo</h2>
      <InputForm />
      <h2 style={Heading}>Hover Card Demo</h2>
      <HoverCardDemo />
      <h2 style={Heading}>Input OTP Demo</h2>
      <InputOTPDemo />
      <h2 style={Heading}>Input Demo</h2>
      <InputDemo />
      <InputFile />
      <InputDisabled />
      <InputWithLabel />
      <InputWithButton />
      <h2 style={Heading}>Label Demo</h2>
      <LabelDemo />
      <h2 style={Heading}>Menu Bar Demo</h2>
      <MenubarDemo />
      <h2 style={Heading}>Navigation Menu Demo</h2>
      <NavigationMenuDemo />
      <h2 style={Heading}>Pagination Demo</h2>
      <PaginationDemo />
      <h2 style={Heading}>Popover Demo</h2>
      <PopoverDemo />
      <h2 style={Heading}>Progress Bar Demo</h2>
      <ProgressDemo />
      <h2 style={Heading}>Radio Group Demo</h2>
      <RadioGroupDemo />
      <h2 style={Heading}>Resizable Demo</h2>
      <ResizableDemo />
      {/* <h2 style={Heading}>Responsive Dialog Demo</h2>
      <DrawerDialogDemo /> */}
      <h2 style={Heading}>Scroll Area Demo</h2>
      <ScrollAreaDemo />
      <h2 style={Heading}>Select Form Demo</h2>
      <SelectForm />
      <h2 style={Heading}>Select Demo</h2>
      <SelectDemo />
      <h2 style={Heading}>Seperator Demo</h2>
      <SeparatorDemo />
      <h2 style={Heading}>Sheet Demo</h2>
      <SheetDemo />
      <h2 style={Heading}>Sidebar Demo</h2>
      <p>Top Left Button</p>
      <AppSidebar />
      {/* Top left of screen (Sidebar Button) */}
      <h2 style={Heading}>Skeleton Demo</h2>
      <SkeletonDemo />
      <SkeletonCard />
      <h2 style={Heading}>Slider Demo</h2>
      <SliderDemo />
      <h2 style={Heading}>Sonner Demo</h2>
      <SonnerDemo />
      <h2 style={Heading}>Switch Form Demo</h2>
      <SwitchForm />
      <h2 style={Heading}>Switch Demo</h2>
      <SwitchDemo />
      <h2 style={Heading}>Table Demo</h2>
      <TableDemo />
      <h2 style={Heading}>Tabs Demo</h2>
      <TabsDemo />
      <h2 style={Heading}>Text Area Demo</h2>
      <TextareaForm />
      <h2 style={Heading}>Toggle Group Demo</h2>
      <ToggleGroupDemo />
      <OutlineToggleGroupDemo />
      <SingleToggleGroupDemo />
      <h2 style={Heading}>Toggle Demo</h2>
      <ToggleDemo />
      <ToggleOutline />
      <ToggleWithText />
      <h2 style={Heading}>Tooltip Demo</h2>
      <TooltipDemo />
    </main>
  );
}