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
interface Check {
    pass: boolean,
    reason: string
}
interface Equipment {
    value: number,
    type: string
}
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
interface SeparatedData {
    leftColumn:{
        authority:OverviewData["authority"],
        booking:OverviewData["booking"],
        images:OverviewData["images"],
        specialtyTags:OverviewData["specialtyTags"],
        details:OverviewData["details"],
        contacts:OverviewData["contacts"]
    },
    rightColumn:{
        recommendations:OverviewData["recommendations"],
        onboarding:OverviewData["onboarding"],
        assessment:OverviewData["assessment"],
        equipment:OverviewData["equipment"],
        inspections:OverviewData["inspections"],
        violations:OverviewData["violations"],
        crashes:OverviewData["crashes"],
        insuranceFiling:OverviewData["insuranceFiling"],
        associations:OverviewData["associations"],
    }
}

export type {
    Tag,
    Phone,
    Contact,
    Check,
    Equipment,
    QAStatistic,
    Insurance,
    Association,
    TitleContentPair,
    Authority,
    Booking,
    OperatingHours,
    Address,
    Recommendation,
    OverviewData,
    SeparatedData
}