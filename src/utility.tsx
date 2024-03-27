
import data from "./testData.json"
import BookingStatus from "./components/Booking/BookingStatus";
import Card from "./components/Card";
import CardGroup from "./components/CardGroup";
import SpecialtyTagGroup from "./components/Specialties/SpecialtyTagGroup";
import PhoneDetails from "./components/PhoneDetails"
import AddressDetails from "./components/Details/AddressDetails"
import WebsiteDetails from "./components/Details/WebsiteDetails"
import RecommendationDetails from "./components/Recommendations/RecommendationDetails"
import StatusIndicatorGroup from "./components/StatusIndicatorGroup"
import EquipmentDetails from "./components/Equipment/EquipmentDetails"
import AssociationGroup from "./components/Association/AssociationGroup"
import { Association, Booking, Check, Contact, Equipment, Insurance, OverviewData, QAStatistic, Recommendation, Tag } from "./types";
import defaultData from './defaultData.json'
import SpecialtyTag from "./components/SpecialtyTag";

// Primary fetch call to store in main state
const getData = async () => {
    
    try{    
        //fetch call
        // const response = await fetch(`url`);
        // const data = await response.json();
        const parsedData = {
            leftColumn:{
                authority:data.authority,
                booking:data.booking,
                images:data.images,
                specialtyTags:data.specialtyTags,
                details:data.details,
                contacts:data.contacts
            },
            rightColumn:{
                recommendations:data.recommendations,
                onboarding:data.onboarding,
                assessment:data.assessment,
                equipment:data.equipment,
                inspections:data.inspections,
                violations:data.violations,
                crashes:data.crashes,
                insuranceFiling:data.insuranceFiling,
                associations:data.associations
            }

        }
        return parsedData;
    }catch(error){
        console.log("Error:",error)
        return defaultData
    }
};

// For booking rating UI
const getBookingContent = (booking:Booking) => {
    return <BookingStatus timeAgo={booking.timeAgo} rated={booking.rated} />
}

// For specialties tags UI
const getSpecialtiesContent = (specialties:Tag[]) => {
    return <Card titleContentPairs={[{title:null,content:<SpecialtyTagGroup tags={specialties} />}]}  classNames="card-first card-last"/>
}


// For details UI
const getDetailsContent = (details:OverviewData["details"]) => {
    return [
        [{title:"Phone",content:<PhoneDetails name={details.phone.name} callDetails={details.phone.callDetails} />}],
        [{title:"Address",content:<AddressDetails addressLines={details.address.addressLines} country={details.address.country} />}],
        [{title:"Website",content:<WebsiteDetails links={details.links} />}]
    ]
}


// For contacts UI
const getContactsContent = (contacts:Contact[]) => {
    let getContacts = contacts.map((contact)=>[{title:contact.type,content:<PhoneDetails name={contact.phone.name} callDetails={contact.phone.callDetails} />}])
    return <CardGroup cards={getContacts} />
}


// For recommendations UI
const getRecommendationContent = (recommendations:Recommendation) => {
    return [
        [{title:"Recommendation",content:<RecommendationDetails recommended={recommendations.recommended}/>}],
        [{title:"Reason",content:recommendations.reason}],
    ]
}

// For onboarding checks UI
const getOnboardingContent = (onboarding:Check[]) => {
    return <Card titleContentPairs={[{title:null,content:<StatusIndicatorGroup statuses={onboarding} />}]}  classNames="card-first card-last"/>
}

// For assessment checks UI
const getAssessmentContent = (assessment:Check[]) => {
    return <Card titleContentPairs={[{title:null,content:<StatusIndicatorGroup statuses={assessment} />}]}  classNames="card-first card-last"/>
}

// For equipment count UI
const getEquipmentContent = (equipment:Equipment[]) => {
    return <Card titleContentPairs={[{title:null,content:<EquipmentDetails equipment={equipment} />}]}  classNames="card-first card-last"/>
}

// For inspections UI
const getInspectionContent = (inspections:QAStatistic) => {
    return <Card titleContentPairs={[{title:"Within the past year",content:inspections.pastYear.toString()},{title:"Total",content:inspections.total.toString()}]}  classNames="card-first card-last"/>
}

// For violations UI
const getViolationsContent = (violations:QAStatistic) => {
    return <Card titleContentPairs={[{title:"Within the past year",content:violations.pastYear.toString()},{title:"Total",content:violations.total.toString()}]}  classNames="card-first card-last"/>
}

// For crashes UI
const getCrashesContent = (crashes:QAStatistic) => {
    return <Card titleContentPairs={[{title:"Within the past year",content:crashes.pastYear.toString()},{title:"Total",content:crashes.total.toString()}]}  classNames="card-first card-last"/>
}

// For insurance filings UI
const getInsuranceContent = (insurance:Insurance) => {
    return [
        [{title:"Insurer",content:insurance.insurer?insurance.insurer:"N/A"}],
        [{title:"Status",content:<SpecialtyTag tag={insurance.status} />},{title:"Policy #",content:insurance.policyNumber?insurance.policyNumber:"N/A"},{title:"Coverage",content:insurance.coverage?insurance.coverage.toString():"N/A"}],
        [{title:"Effective Date",content:insurance.effectiveDate?insurance.effectiveDate:"N/A"},{title:"Cancellation Date",content:insurance.cancellationDate?insurance.cancellationDate:"N/A"}]
    ]
}

// For associate list UI
const getAssociationContent = (associations:Association[]) => {
    return <Card titleContentPairs={[{title:null,content:<AssociationGroup associations={associations}/>}]}  classNames="card-first card-last"/>
}


export {getData,getBookingContent,getSpecialtiesContent,getDetailsContent,getContactsContent,getRecommendationContent,getOnboardingContent,getAssessmentContent,getEquipmentContent,getInspectionContent,getViolationsContent,getCrashesContent,getInsuranceContent,getAssociationContent}