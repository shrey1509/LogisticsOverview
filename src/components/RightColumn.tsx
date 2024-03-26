import React from "react";
import {getRecommendationContent,getOnboardingContent,getAssessmentContent,getEquipmentContent,getInspectionContent,getViolationsContent,getCrashesContent,getInsuranceContent,getAssociationContent} from '../utility'
import CardGroup from "./CardGroup";
import OverviewSection from './OverviewSection'
import { SeparatedData } from "../types";

const RightColumn = ({overviewData}:{overviewData:SeparatedData["rightColumn"]}) => {
    return (
        <div className="overview-column">
            {/* Smart Recommendation */}
            <OverviewSection title="Smart Recommendation" content={<CardGroup cards={getRecommendationContent(overviewData?.recommendations)} />} /> 
            {/* Carrier Onboarding */}
            {overviewData?.onboarding.length&&overviewData?.onboarding.length>0?<OverviewSection title="Carrier Onboarding" content={getOnboardingContent(overviewData.onboarding)} />:""}
            {/* Assessment */}
            {overviewData?.assessment.length&&overviewData?.assessment.length>0?<OverviewSection title="Assessment" content={getAssessmentContent(overviewData.assessment)} />:""}
            {/* Equipment */}
            {overviewData?.equipment.length&&overviewData?.equipment.length>0?<OverviewSection title="Equipment" content={getEquipmentContent(overviewData.equipment)} />:""}
            {/* Inspections */}
            <OverviewSection title="Inspections" content={getInspectionContent(overviewData?.inspections)} /> 
            {/* Violations */}
            <OverviewSection title="Violations" content={getViolationsContent(overviewData?.violations)} /> 
            {/* Crashes */}
            <OverviewSection title="Crashes" content={getCrashesContent(overviewData?.crashes)} /> 
            {/* Insurance Filing */}
            <OverviewSection title="Insurance Filing" content={<CardGroup cards={getInsuranceContent(overviewData?.insuranceFiling)} />} />
            {/* Associations */}
            {overviewData?.associations.length&&overviewData?.associations.length>0?<OverviewSection title="Associations" content={getAssociationContent(overviewData.associations)} />:""}

        </div>
    );
}

export default RightColumn;