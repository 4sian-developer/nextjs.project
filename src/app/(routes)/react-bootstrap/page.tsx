"use client";

//? REACT Built-in
import React, { useState } from "react";
//? REACT BOOTSTRAP
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
//? UI
import { AccordionExample } from "./_ui/accordion";
import { AlertDismissibleExample } from "./_ui/alert";
import { VariationsExample } from "./_ui/badge";
import { BreadcrumbExample } from "./_ui/breadcrumb";
import { ToggleButtonGroupControlled } from "./_ui/button-group";
import { LoadingButton } from "./_ui/button";
import { BgColorExample } from "./_ui/card";
import { DarkVariantExample } from "./_ui/carousel";
import { VariantsExample } from "./_ui/close-button";
import { DropdownVariantsExample } from "./_ui/dropdown";
import { FigureExample } from "./_ui/figure";
import { ShapeExample } from "./_ui/image";
import { StyleActionsExample } from "./_ui/list-group";
import { MyVerticallyCenteredModal } from "./_ui/modal";
import { AlignmentExample } from "./_ui/nav-tab";
import { BasicExample, OffcanvasExample } from "./_ui/navbar";
import { TriggerExample } from "./_ui/overlay-tooltip";
import { AdvancedExample } from "./_ui/pagination";
import { CardExample } from "./_ui/placeholder";
import { StackedExample } from "./_ui/progress-bar";
import { SpinnersVariantsExample } from "./_ui/spinners";
import { ControlledTabsExample } from "./_ui/tabbed-components";
import { DarkExample } from "./_ui/table";
import { PlacementExample } from "./_ui/toast";
import { FadeExample } from "./_ui/transition";

export default function ReactBootstrapPage() {

  //? State to show/hide modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <main>
      <Container className="mt-5">
        <small>React-Bootstrap UI EXAMPLE</small>
        <h1 className="display-2">REACT BOOTSTRAP</h1>
        <small>NOTE: More examples of usage in source code!</small>
        <h2 className="mt-4 pt-3 pb-3">Accordion</h2>
        <AccordionExample />
        <h2 className="mt-4 pt-3 pb-3">Alert</h2>
        <AlertDismissibleExample />
        <h2 className="mt-4 pt-3 pb-3">Badge</h2>
        <VariationsExample />
        <h2 className="mt-4 pt-3 pb-3">Breadcrumb</h2>
        <BreadcrumbExample />
        <h2 className="mt-4 pt-3 pb-3">Toggle Group Button</h2>
        <ToggleButtonGroupControlled />
        <h2 className="mt-4 pt-3 pb-3">Button</h2>
        <LoadingButton />
        <h2 className="mt-4 pt-3 pb-3">Card</h2>
        <BgColorExample />
        <h2 className="mt-4 pt-3 pb-3">Carousel</h2>
        <DarkVariantExample />
        <h2 className="mt-4 pt-3 pb-3">Close Button</h2>
        <VariantsExample />
        <h2 className="mt-4 pt-3 pb-3">Dropdown</h2>
        <DropdownVariantsExample />
        <h2 className="mt-4 pt-3 pb-3">Figure</h2>
        <FigureExample />
        <h2 className="mt-4 pt-3 pb-3">Image</h2>
        <ShapeExample />
        <h2 className="mt-4 pt-3 pb-3">List Group</h2>
        <StyleActionsExample />
        <h2 className="mt-4 pt-3 pb-3">Modal</h2>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <h2 className="mt-4 pt-3 pb-3">Nav Tab</h2>
        <AlignmentExample />
        <h2 className="mt-4 pt-3 pb-3">Navbar</h2>
        <BasicExample />
        <h2 className="mt-4 pt-3 pb-3">Offcanvas</h2>
        <OffcanvasExample />
        {/* <h2 className="mt-4 pt-3 pb-3">Overlay Tooltip</h2>
        <TriggerExample /> */}
        <h2 className="mt-4 pt-3 pb-3">Pagination</h2>
        <AdvancedExample />
        <h2 className="mt-4 pt-3 pb-3">Placeholder</h2>
        <CardExample />
        <h2 className="mt-4 pt-3 pb-3">Progress Bar</h2>
        <StackedExample />
        <h2 className="mt-4 pt-3 pb-3">Spinners</h2>
        <SpinnersVariantsExample />
        <h2 className="mt-4 pt-3 pb-3">Tabbed</h2>
        <ControlledTabsExample />
        <h2 className="mt-4 pt-3 pb-3">Table</h2>
        <DarkExample />
        <h2 className="mt-4 pt-3 pb-3">Toast</h2>
        <PlacementExample />
        <h2 className="mt-4 pt-3 pb-3">Transition</h2>
        <FadeExample />
      </Container>
    </main>
  );
}