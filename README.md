# Carrier Logistics Overview

## Component List

#### Most Used HOCs

- **Card**: Takes an array of title-content pairs to render all light-gray boxes in one
- **OverviewSection**: Takes a title and dynamic content to render all sections in one
- **Card Group**: Takes in card details to render cards one below the other dynamically

#### Section Wise Components


- **LeftColumn**: Takes in data to be displayed in left column
- **RightColumn**: Takes in data to be displayed in right column
- ##### *Authority*
    - **AuthoritySection**: Takes in authority information to display

- ##### *Booking*
    - **BookingStatus**:  Takes in booking date and rating information to display if booked

- ##### *Images*
    - **OverviewImages**:  Takes in image array to display if present

- ##### *Specialties*
    - **SpecialtyTag**: Takes in tag name and color to display
    - **SpecialtyTagGroup**: Takes in array of tags and groups multiple SpecialtyTags if present

- ##### *Details*
    - **OpeningHours**:  Takes in opening information and status to display
    - **PhoneDetails**:  Takes in name and number information to display
    - **AddressDetails**:  Takes in address lines and country information to display
    - **WebsiteDetails**:  Takes in multiple links to display

- ##### *Smart Recommendation*
    - **RecommendationDetails**: Takes in if recommended to render a message

- ##### *Carrier Onboarding & Assessment*
    - **StatusIndicator**: Takes in a pass/fail and a message to display
    - **StatusIndicatorGroup**: Takes in array of statuses to group if present

- ##### *Equipment*
    - **EquipmentDetails**: Takes in array of equipment to display


- ##### *Associations*
    - **AssociationDetails**: Takes in associate information to display
    - **AssociationGroup**: Takes in associates array to group if present 


## Component Hierarchy

This hierarchy assumes a certain set of data to pass as props for clarity.

![Heirarchy](ComponentHeirarchy.png)

## Props

```
// Main Object
interface OverviewData  {
    authority:Authority,
    booking:Booking,
    images:string[],
    specialtyTags: Tag[],
    details:{
        operatingHours: OperatingHours,
        phone: Phone,
        address:Address,
        links: string[],
    },
    contacts: Contact[],
    recommendations:Recommendation,
    onboarding: Check[],
    assessment: Check[]
    equipment: Equipment[],
    inspections: QAStatistic,
    violations: QAStatistic,
    crashes: QAStatistic,
    insuranceFiling: Insurance,
    associations: Association[]
}

interface Tag {
    tagName:string,
    tagColor:string
}

interface Phone {
    name: string | null,
    callDetails:{
        countryCode: number | null,
        areaCode: number | null,
        number: number | null,
        extension: number | null
    }
}

interface Contact {
    type: string,
    phone: Phone
}

// For components with check/cross marks
interface Check {
    pass: boolean,
    reason: string
}

interface Equipment {
    value: number,
    type: string
}

// For inspections, violations and crashes
interface QAStatistic {
    pastYear: number,
    total: number
}

interface Insurance {
    insurer:string | null,
    status: Tag,
    policyNumber: string | null,
    coverage: number,
    effectiveDate: string | null,
    cancellationDate: string | null
}

interface Association {
    image: string | null,
    name: string,
    role: string | null
    link: string
}

// For Card
interface TitleContentPair {
    title: string | null,
    content: string | JSX.Element
}

interface Authority {
    type: string,
    status: string,
    age: number
}

interface Booking {
    previouslyBooked: boolean,
    timeAgo: string,
    rated: boolean | null,
}

interface OperatingHours {
    status: boolean,
    timePeriod: {
        from: string,
        to: string
    }
}

interface Address {
    addressLines: string[],
    country: string
}

interface Recommendation {
    recommended: boolean,
    reason: string    
}

```

#### State and Data Fetching

A single state is present to intake and spread data for simplicity. (User Interaction is present in booking rating which would need a state update) 

Data Fetching is done at initial load and separated into the two columns for readability. Once data is sent to these columns, conditionals take over to assess what all to display dynamically. All HOCs mentioned intake section-specific JSX Elements, as sent by respective function present **utility** file.

For example:

```
// RightColumn

// Associations checks if associate users are present

{overviewData?.associations.length && overviewData?.associations.length > 0 ?
    <OverviewSection title="Associations" content={getAssociationContent(overviewData.associations)} />
:""}

// It renders a section with title Associations and gets content from its respective function 

```

```
// utility

const getAssociationContent = (associations:Association[]) => {
    return <Card titleContentPairs={[{title:null,content:<AssociationGroup associations={associations}/>}]}  classNames="card-first card-last"/>
}

// It renders a card with no title and sends a JSX element called AssociationGroup with the associate users array

```

### Styling

Cards are dynamically styled if in a card group, changing border radius accordingly.
Aim for tags is to take the tagColor to pass into css to use
A 2 column layout works for simplicity, can use grid.

#### Accessibility

All images are present with respective alt texts, main and section tags are used 