/* tslint:disable */

/* This file was created via "salesforce-wsdl-consumer" on Fri Dec 06 2019 23:22:56 GMT+0100 (CET).
Do not make any changes here as it can be anytime regenerated. */


export type AccessMethod = "Get" | "Post";
export type ACPStatus = "New" | "Pending" | "Deployed";
export type ActionEmailRecipientTypes = "group" | "role" | "user" | "opportunityTeam" | "accountTeam" | "roleSubordinates" | "owner" | "creator" | "partnerUser" | "accountOwner" | "customerPortalUser" | "portalRole" | "portalRoleSubordinates" | "contactLookup" | "userLookup" | "roleSubordinatesInternal" | "email" | "caseTeam" | "campaignMemberDerivedOwner";
export type ActionEmailSenderType = "CurrentUser" | "OrgWideEmailAddress" | "DefaultWorkflowUser";
export type ActionLinkExecutionsAllowed = "Once" | "OncePerUser" | "Unlimited";
export type ActionLinkHttpMethod = "HttpDelete" | "HttpHead" | "HttpGet" | "HttpPatch" | "HttpPost" | "HttpPut";
export type ActionLinkType = "API" | "APIAsync" | "Download" | "UI";
export type ActionLinkUserVisibility = "Creator" | "Everyone" | "EveryoneButCreator" | "Manager" | "CustomUser" | "CustomExcludedUser";
export type ActionOverrideType = "Default" | "Standard" | "Scontrol" | "Visualforce" | "Flexipage" | "LightningComponent";
export type ActionTaskAssignedToTypes = "user" | "role" | "opportunityTeam" | "accountTeam" | "owner" | "accountOwner" | "creator" | "accountCreator" | "partnerUser" | "portalRole";
export type ApexCodeUnitStatus = "Inactive" | "Active" | "Deleted";
export type APIAccessLevel = "Unrestricted" | "Restricted";
export type Article = "None" | "Indefinite" | "Definite";
export type AssignToLookupValueType = "User" | "Queue";
export type AsyncRequestState = "Queued" | "InProgress" | "Completed" | "Error";
export type AudienceCriteriaType = "CustomList" | "MaxDaysInCommunity";
export type AudienceCriterionOperator = "Equal" | "NotEqual" | "GreaterThan" | "GreaterThanOrEqual" | "LessThan" | "LessThanOrEqual" | "Contains" | "StartsWith" | "Includes" | "NotIncludes";
export type AudienceCriterionType = "Default" | "Profile" | "FieldBased" | "GeoLocation" | "Domain" | "Permission";
export type AuraBundleType = "Application" | "Component" | "Event" | "Interface" | "Tokens";
export type AuthenticationProtocol = "NoAuthentication" | "Oauth" | "Password" | "AwsSv4" | "Jwt" | "JwtExchange";
export type AuthProviderType = "Facebook" | "Janrain" | "Salesforce" | "OpenIdConnect" | "MicrosoftACS" | "LinkedIn" | "Twitter" | "Google" | "GitHub" | "Custom";
export type BlankValueBehavior = "MatchBlanks" | "NullNotAllowed";
export type BotInvocationMappingType = "Input" | "Output";
export type BotNavigationType = "Call" | "Redirect" | "TransferToAgent";
export type BotQuickReplyType = "Static" | "Dynamic";
export type BotStepConditionOperatorType = "Equals" | "NotEquals" | "IsSet" | "IsNotSet" | "GreaterThan" | "LessThan";
export type BotStepType = "Navigation" | "Invocation" | "VariableOperation" | "Message" | "Wait" | "Group" | "SystemMessage" | "RecordLookup";
export type BotVariableOperationType = "Set" | "Unset" | "Collect";
export type BotWidgetType = "Menu" | "Buttons";
export type BusinessHoursSourceType = "None" | "Case" | "Static";
export type CanvasLocationOptions = "None" | "Chatter" | "UserProfile" | "Visualforce" | "Aura" | "Publisher" | "ChatterFeed" | "ServiceDesk" | "OpenCTI" | "AppLauncher" | "MobileNav" | "PageLayout";
export type CanvasOptions = "HideShare" | "HideHeader" | "PersonalEnabled";
export type CaseSubjectOption = "SocialPostSource" | "SocialPostContent" | "BuildCustom";
export type CaseSubjectParticleType = "ProvidedString" | "Source" | "MessageType" | "SocialHandle" | "SocialNetwork" | "Sentiment" | "RealName" | "Content" | "PipeSeparator" | "ColonSeparator" | "HyphenSeparator";
export type CaseType = "Nominative" | "Accusative" | "Genitive" | "Dative" | "Inessive" | "Elative" | "Illative" | "Adessive" | "Ablative" | "Allative" | "Essive" | "Translative" | "Partitive" | "Objective" | "Subjective" | "Instrumental" | "Prepositional" | "Locative" | "Vocative" | "Sublative" | "Superessive" | "Delative" | "Causalfinal" | "Essiveformal" | "Termanative" | "Distributive" | "Ergative" | "Adverbial" | "Abessive" | "Comitative";
export type CategoryGroupVisibility = "ALL" | "NONE" | "CUSTOM";
export type Channel = "AllChannels" | "App" | "Pkb" | "Csp" | "Prm";
export type ChannelSource = "Other" | "Phone" | "Chat";
export type ChartAxis = "x" | "y" | "y2" | "r";
export type ChartBackgroundDirection = "TopToBottom" | "LeftToRight" | "Diagonal";
export type ChartColorPalettes = "Default" | "gray" | "colorSafe" | "unity" | "justice" | "nightfall" | "sunrise" | "bluegrass" | "tropic" | "heat" | "dusk" | "pond" | "watermelon" | "fire" | "water" | "earth" | "accessible";
export type ChartLegendPosition = "Right" | "Bottom" | "OnChart";
export type ChartPosition = "CHART_TOP" | "CHART_BOTTOM";
export type ChartRangeType = "Auto" | "Manual";
export type ChartTheme = "light" | "dark";
export type ChartType = "None" | "Scatter" | "ScatterGrouped" | "Bubble" | "BubbleGrouped" | "HorizontalBar" | "HorizontalBarGrouped" | "HorizontalBarStacked" | "HorizontalBarStackedTo100" | "VerticalColumn" | "VerticalColumnGrouped" | "VerticalColumnStacked" | "VerticalColumnStackedTo100" | "Line" | "LineGrouped" | "LineCumulative" | "LineCumulativeGrouped" | "Pie" | "Donut" | "Funnel" | "VerticalColumnLine" | "VerticalColumnGroupedLine" | "VerticalColumnStackedLine" | "Plugin";
export type ChartUnits = "Auto" | "Integer" | "Hundreds" | "Thousands" | "Millions" | "Billions" | "Trillions";
export type ChatterExtensionType = "Lightning";
export type CleanRuleStatus = "Inactive" | "Active";
export type CMSConnectionSourceType = "AEM" | "Drupal" | "WordPress" | "SDL" | "Sitecore" | "Other";
export type CMSConnectionStatus = "ACTIVE" | "INACTIVE";
export type CMSSourceConnectionType = "Public" | "Authenticated";
export type CommunityBaseTemplate = "c";
export type CommunityTemplateBundleInfoType = "Highlight" | "PreviewImage";
export type CommunityTemplateCategory = "IT" | "Marketing" | "Sales" | "Service";
export type CommunityThemeLayoutType = "Login" | "Home" | "Inner";
export type Complexity = "NoRestriction" | "AlphaNumeric" | "SpecialCharacters" | "UpperLowerCaseNumeric" | "UpperLowerCaseNumericSpecialCharacters" | "Any3UpperLowerCaseNumericSpecialCharacters";
export type ComponentInstancePropertyTypeEnum = "decorator";
export type ConnectedAppOauthAccessScope = "Basic" | "Api" | "Web" | "Full" | "Chatter" | "CustomApplications" | "RefreshToken" | "OpenID" | "Profile" | "Email" | "Address" | "Phone" | "OfflineAccess" | "CustomPermissions" | "Wave" | "Eclair";
export type ConnectionPropertyName = "LinkId" | "AwsVpcEndpointId" | "AwsVpcEndpointServiceName";
export type ContentAssetAccess = "VIEWER" | "COLLABORATOR" | "INFERRED";
export type ContentAssetFormat = "Original" | "ZippedVersions";
export type ConversationDataType = "Text" | "Number" | "Boolean" | "Object" | "Date" | "DateTime" | "Currency" | "Id";
export type ConversationInvocableTargetType = "apex" | "flow" | "standardInvocableAction";
export type ConversationMappingType = "Input" | "Output";
export type ConversationSystemMessageParamType = "Transfer";
export type ConversationSystemMessageType = "Transfer" | "EndChat";
export type ConversationVariableCollectionType = "List";
export type ConversationVariableOperandSourceType = "StandardConversationVariable" | "ConversationVariable" | "ContextVariable" | "MlSlotClass" | "StandardMlSlotClass" | "Value" | "BotDefinition" | "Queue";
export type ConversationVariableType = "ConversationVariable" | "ContextVariable";
export type CspTrustedSiteContext = "All" | "LEX" | "Communities";
export type CurrencyIsoCode = "ADP" | "AED" | "AFA" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "ATS" | "AUD" | "AWG" | "AZM" | "AZN" | "BAM" | "BBD" | "BDT" | "BEF" | "BGL" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRB" | "BRL" | "BSD" | "BTN" | "BWP" | "BYB" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "CRC" | "CSD" | "CUC" | "CUP" | "CVE" | "CYP" | "CZK" | "DEM" | "DJF" | "DKK" | "DOP" | "DZD" | "ECS" | "EEK" | "EGP" | "ERN" | "ESP" | "ETB" | "EUR" | "FIM" | "FJD" | "FKP" | "FRF" | "GBP" | "GEL" | "GHC" | "GHS" | "GIP" | "GMD" | "GNF" | "GRD" | "GTQ" | "GWP" | "GYD" | "HKD" | "HNL" | "HRD" | "HRK" | "HTG" | "HUF" | "IDR" | "IEP" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "ITL" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LUF" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MGF" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MRU" | "MTL" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZM" | "MZN" | "NAD" | "NGN" | "NIO" | "NLG" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PTE" | "PYG" | "QAR" | "RMB" | "ROL" | "RON" | "RSD" | "RUB" | "RUR" | "RWF" | "SAR" | "SBD" | "SCR" | "SDD" | "SDG" | "SEK" | "SGD" | "SHP" | "SIT" | "SKK" | "SLL" | "SOS" | "SRD" | "SRG" | "SSP" | "STD" | "STN" | "SUR" | "SVC" | "SYP" | "SZL" | "THB" | "TJR" | "TJS" | "TMM" | "TMT" | "TND" | "TOP" | "TPE" | "TRL" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEB" | "VEF" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "YER" | "YUM" | "ZAR" | "ZMK" | "ZMW" | "ZWD" | "ZWL";
export type CustomSettingsType = "List" | "Hierarchy";
export type DashboardComponentColumnType = string;
export type DashboardComponentFilter = "RowLabelAscending" | "RowLabelDescending" | "RowValueAscending" | "RowValueDescending";
export type DashboardComponentSize = "Narrow" | "Medium" | "Wide";
export type DashboardComponentType = "Bar" | "BarGrouped" | "BarStacked" | "BarStacked100" | "Column" | "ColumnGrouped" | "ColumnStacked" | "ColumnStacked100" | "Line" | "LineGrouped" | "Pie" | "Table" | "Metric" | "Gauge" | "LineCumulative" | "LineGroupedCumulative" | "Scontrol" | "VisualforcePage" | "Donut" | "Funnel" | "ColumnLine" | "ColumnLineGrouped" | "ColumnLineStacked" | "ColumnLineStacked100" | "Scatter" | "ScatterGrouped" | "FlexTable";
export type DashboardFilterOperation = "equals" | "notEqual" | "lessThan" | "greaterThan" | "lessOrEqual" | "greaterOrEqual" | "contains" | "notContain" | "startsWith" | "includes" | "excludes" | "between";
export type DashboardType = "SpecifiedUser" | "LoggedInUser" | "MyTeamUser";
export type DataCategoryFilterOperation = "above" | "below" | "at" | "aboveOrBelow";
export type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
export type DeleteConstraint = "Cascade" | "Restrict" | "SetNull";
export type DeploymentStatus = "InDevelopment" | "Deployed";
export type DeployProblemType = "Warning" | "Error" | "Info";
export type DeployStatus = "Pending" | "InProgress" | "Succeeded" | "SucceededPartial" | "Failed" | "Canceling" | "Canceled";
export type DevicePlatformType = "ios" | "android";
export type DeviceType = "phone" | "tablet" | "minitablet";
export type DupeActionType = "Allow" | "Block";
export type DupeSecurityOptionType = "EnforceSharingRules" | "BypassSharingRules";
export type EmailServicesAttOptions = "None" | "TextOnly" | "BinaryOnly" | "All" | "NoContent";
export type EmailServicesErrorAction = "UseSystemDefault" | "Bounce" | "Discard" | "Requeue";
export type EmailTemplateStyle = "none" | "freeForm" | "formalLetter" | "promotionRight" | "promotionLeft" | "newsletter" | "products";
export type EmailTemplateType = "text" | "html" | "custom" | "visualforce";
export type EmailTemplateUiType = "Aloha" | "SFX" | "SFX_Sample";
export type EmailToCaseOnFailureActionType = "Bounce" | "Discard" | "Requeue";
export type EmailToCaseRoutingAddressType = "EmailToCase" | "Outlook" | "GmailOAuth";
export type EmbeddedServiceAuthMethod = "CommunitiesLogin" | "CustomLogin";
export type EmbeddedServiceChannelType = "EmbeddedServiceConfig" | "MessagingChannel" | "Phone";
export type EmbeddedServiceComponentBundleType = "AuraDefinitionBundle" | "LightningComponentBundle";
export type EmbeddedServiceCustomComponentType = "LA_Prechat" | "LA_Minimized" | "LA_PlainTextChatMessage";
export type EmbeddedServiceFeature = "NotInUse" | "Base" | "LiveAgent" | "FieldService" | "Flows";
export type EmbeddedServiceFlowType = "FL_Flow" | "FS_NewAppointment" | "FS_ModifyAppointment" | "FS_CancelAppointment";
export type EmbeddedServiceFontSize = "Small" | "Medium" | "Large";
export type EmbeddedServiceLabelKey = "LA_Container_Base_Close" | "LA_Container_Base_Minimize" | "LA_Container_Base_EndOfDialog" | "LA_Container_Base_MinimizedContainerAssistiveText" | "LA_Chat_Body_ChatWindowAgent" | "LA_Chat_Body_InputTextPlaceholder" | "LA_Chat_Body_AgentTypingUpdate" | "LA_Chat_Body_Send" | "LA_Chat_Body_ChatStartTime" | "LA_Chat_Body_MessageAreaTransferred" | "LA_Chat_Body_FileTransferCanceled" | "LA_Chat_Body_FileTransferSuccess" | "LA_Chat_Body_FileTransferFailure" | "LA_Chat_Body_FileTransferRequested" | "LA_Chat_Body_TransferFailed" | "LA_Chat_ExtendedHeader_ShowExtendedHeader" | "LA_Chat_ExtendedHeader_HideExtendedHeader" | "LA_Chat_ExtendedHeader_ChatStateHeaderGreeting" | "LA_Chat_ExtendedHeader_SaveTranscript" | "LA_Chat_ExtendedHeader_EndChatAction" | "LA_Chat_FileTransfer_FileUpload" | "LA_Chat_FileTransfer_UploadFile" | "LA_Chat_FileTransfer_SelectNewFile" | "LA_Chat_FileTransfer_UsePreviousElementToUploadFile" | "LA_Chat_FileTransfer_RemoveFile" | "LA_Chat_Minimized_MessageNotification" | "LA_Chat_Minimized_SingleMessageNotification" | "LA_Chat_Minimized_AgentSaysNotification" | "LA_Chat_Minimized_IdleTimeoutMinimizedWarning" | "LA_Chat_Minimized_IdleTimeoutMinimizedEndChat" | "LA_Chat_Ended_ChatEnd" | "LA_Chat_Ended_ChatEndAgent" | "LA_Chat_Ended_ChatEndConnection" | "LA_Chat_Ended_ChatButtonClose" | "LA_Chat_Ended_PostChatButton" | "LA_Chat_Ended_IdleTimeoutEndChatMessage" | "LA_Chat_Reconnecting_ReconnectingChasitorIssue" | "LA_Chat_Reconnecting_ReconnectingMinimizedMessage" | "LA_Chat_Timeout_IdleTimeoutWarningQuestion" | "LA_Chat_AgentTransfer_BannerInProgressTransfer" | "LA_Chat_AgentTransfer_MinimizedInProgressTransfer" | "LA_Chat_AgentTransfer_BannerTransferred" | "LA_Chat_AgentTransfer_BannerReconnected" | "LA_Chat_CloseConfirmation_ChatStateHeader" | "LA_Chat_CloseConfirmation_ChatStateBody" | "LA_Chat_CloseConfirmation_ChatStateResume" | "LA_Chat_CloseConfirmation_ChatStateEnd" | "LA_Chat_UnseenMessage_UnseenMessage" | "LA_Chat_UnseenMessage_SingleUnseenMessage" | "LA_OfflineSupport_SupportForm_HeaderText" | "LA_OfflineSupport_Error_ErrorDialogTitle" | "LA_OfflineSupport_Error_ErrorDialogBody" | "LA_OfflineSupport_Error_ErrorDialogButton" | "LA_OfflineSupport_SupportForm_SupportFormTitle" | "LA_OfflineSupport_SupportForm_SupportFormSubtitle" | "LA_OfflineSupport_SupportForm_SupportFormButton" | "LA_OfflineSupport_SupportForm_BannerAltText" | "LA_OfflineSupport_CloseConfirmation_ConfirmationDialogTitle" | "LA_OfflineSupport_CloseConfirmation_ConfirmationDialogBody" | "LA_OfflineSupport_CloseConfirmation_ConfirmationDialogButton" | "LA_OfflineSupport_Minimized_ConfirmationMinimizedText" | "LA_OfflineSupport_Minimized_ErrorMinimizedText" | "LA_PostChat_Base_PostChat" | "LA_PreChat_Base_LiveChat" | "LA_PreChat_Base_Instructions" | "LA_PreChat_Base_BannerAltText" | "LA_PreChat_Base_PrechatAssistiveText" | "LA_PreChat_Base_StartChat" | "LA_PreChat_Base_FieldError" | "LA_Waiting_WithoutQueuePos_WaitingGreeting" | "LA_Waiting_WithoutQueuePos_WaitingDefaultName" | "LA_Waiting_WithoutQueuePos_WaitingMessage" | "LA_Waiting_WithoutQueuePos_WaitingCancelChatRequest" | "LA_Waiting_WithQueuePos_WaitingQueuePosMessageFirstLine" | "LA_Waiting_WithQueuePos_WaitingQueuePosMessageSecondLine" | "LA_Waiting_WithQueuePos_WaitingQueuePosZeroMessage" | "LA_Waiting_WithQueuePos_WaitingQueuePosConnectingMessage" | "LA_Waiting_WithQueuePos_WaitingQueuePosMaxNumber" | "LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageFirstLine" | "LA_Waiting_WithQueuePos_WaitingQueuePosMaxMessageSecondLine" | "LA_Waiting_Minimized_MinimizedWaitingMessage" | "LA_Waiting_Minimized_MinimizedQueuePosMessage" | "LA_Waiting_Minimized_MinimizedQueuePosZeroMessage" | "LA_Waiting_Minimized_MinimizedQueuePosAssistiveMessage" | "LA_Waiting_Minimized_MinimizedQueuePosZeroAssistiveMessage" | "LA_Waiting_Error_ErrorNoAgentTitle" | "LA_Waiting_Error_ErrorNoAgentHeader" | "LA_Waiting_Error_ErrorNoAgentBodyApology" | "LA_Waiting_Error_ErrorBlockedTitleAndHeader" | "LA_Waiting_Error_ErrorBlockedBody" | "LA_Waiting_Error_ErrorBlockedCloseButton" | "LA_Waiting_Error_ErrorNoConnectionTitle" | "LA_Waiting_Error_ErrorNoConnectionHeader" | "LA_Waiting_Error_ErrorNoConnectionBodyApology" | "LA_Waiting_Error_ErrorTryAgainButton" | "LA_Waiting_Error_ErrorExitChatButton" | "LA_Waiting_CloseConfirmation_WaitingStateHeader" | "LA_Waiting_CloseConfirmation_WaitingStateBodyApology" | "LA_Waiting_CloseConfirmation_WaitingStateLeave" | "LA_Waiting_CloseConfirmation_WaitingStateContinue" | "LA_Chat_Timeout_IdleTimeoutWarningRequest" | "LA_Waiting_Error_ErrorNoAgentBodyRequest" | "LA_Waiting_Error_ErrorNoConnectionBodyRequest" | "LA_Waiting_CloseConfirmation_WaitingStateBodyWarning" | "LA_General_CloseSessionWarningTitle" | "LA_General_CloseSessionWarningBody" | "LA_General_CloseSessionWarningButton" | "LA_Chat_Body_ChooseOption" | "LA_Waiting_Base_BannerAssistiveText" | "LA_Chat_Group_Chat_HeaderTitle" | "LA_Chat_Group_Chat_ExtendedHeaderGreeting" | "LA_Chat_Group_Chat_AgentJoinedChat" | "LA_Chat_Group_Chat_AgentLeftChat" | "LA_Chat_Group_Chat_MinimizedStateMessage" | "LA_Chat_WithQueuePos_QueuePosTransferringMessage" | "LA_Chat_Ended_ChatEndChatbot" | "FS_Container_Base_Back" | "FS_Container_AuthenticationFailure_Title" | "FS_Container_AuthenticationFailure_Body" | "FS_Container_AuthenticationFailure_Button" | "FS_AppointmentDetail_Error_AccessDenied" | "FS_AppointmentDetail_Error_NoAppointmentFound" | "FS_AppointmentDetail_Error_ButtonOK" | "FS_AppointmentList_Base_ActiveAppointmentTab" | "FS_AppointmentList_Base_ClosedAppointmentTab" | "FS_AppointmentList_Base_Header" | "FS_AppointmentList_Base_NewAppointmentButtonLabel" | "FS_AppointmentList_Error_GenericErrorStatement" | "FS_AppointmentList_Empty_NoAppointmentsTitleUpcomingTab" | "FS_AppointmentList_Empty_NoAppointmentsDescriptionUpcomingTab" | "FS_AppointmentList_Empty_NoAppointmentsTitlePastTab" | "FS_AppointmentList_Empty_NoAppointmentsDescriptionPastTab" | "FS_Confirmation_Base_Scheduled" | "FS_Confirmation_Base_Assigned" | "FS_Confirmation_Base_Arriving" | "FS_Confirmation_Base_InProgress" | "FS_Confirmation_Base_Dispatched" | "FS_Confirmation_Base_Completed" | "FS_Confirmation_Base_HeaderText" | "FS_Confirmation_Base_AddCalendar" | "FS_Confirmation_Base_ViewAppointment" | "FS_Flows_Error_Title" | "FS_Flows_Error_Body" | "FS_Flows_Error_ConfirmButton" | "FS_Flows_Error_CancelOrModifyError" | "FS_Flows_NewAppointmentCloseConfirmation_Title" | "FS_Flows_NewAppointmentCloseConfirmation_Body" | "FS_Flows_NewAppointmentCloseConfirmation_ButtonClose" | "FS_Flows_NewAppointmentCloseConfirmation_ButtonCancel" | "FS_Flows_CancelAppointmentCloseConfirmation_Title" | "FS_Flows_CancelAppointmentCloseConfirmation_Body" | "FS_Flows_CancelAppointmentCloseConfirmation_ButtonClose" | "FS_Flows_CancelAppointmentCloseConfirmation_ButtonCancel" | "FS_Flows_CancelAppointmentCloseConfirmation_Footer" | "FS_Flows_ModifyAppointmentCloseConfirmation_Title" | "FS_Flows_ModifyAppointmentCloseConfirmation_Body" | "FS_Flows_ModifyAppointmentCloseConfirmation_ButtonClose" | "FS_Flows_ModifyAppointmentCloseConfirmation_ButtonCancel" | "FS_Flows_ModifyAppointmentCloseConfirmation_Footer" | "FS_Scheduling_Base_HeaderText" | "FS_Scheduling_Base_RecommendedTab" | "FS_Scheduling_Base_ByDateTab" | "FS_Scheduling_Base_PreviousWeekAssistiveText" | "FS_Scheduling_Base_NextWeekAssistiveText" | "FS_Scheduling_Base_DatePickerAssistiveText" | "FS_Scheduling_Error_UnexpectedError" | "FS_Scheduling_Error_NoAvailableTimeslotsError" | "FS_Scheduling_Error_NoAvailableTimeslotsByDateError" | "FS_Welcome_Base_GreetingTitle" | "FS_Welcome_Base_NewAppointmentButton" | "FS_Welcome_Base_ExistingAppointmentsButton" | "FS_Confirmation_Base_DoneButton" | "FS_AppointmentList_Error_GenericErrorRequest" | "FS_AppointmentHome_Base_CancelAppointmentButton" | "FS_AppointmentHome_Base_ModifyAppointmentButton" | "FS_AppointmentHome_Base_ErrorTitle" | "FS_Scheduling_Base_TimePickerAssistiveText" | "FS_ResourceDetail_Base_Header" | "FS_AppointmentHome_Base_DefaultCardHeaderText" | "FS_Error_Dialog_Title" | "FS_Error_Dialog_Body" | "FS_Error_Dialog_Confirm_Button";
export type EmbeddedServiceLayoutType = "FS_AppointmentHome";
export type EmbeddedServiceQuickActionType = "Prechat" | "OfflineCase";
export type EmbeddedServiceScenario = "Sales" | "Service" | "Basic";
export type Encoding = "UTF-8" | "ISO-8859-1" | "Shift_JIS" | "ISO-2022-JP" | "EUC-JP" | "ks_c_5601-1987" | "Big5" | "GB2312" | "Big5-HKSCS" | "x-SJIS_0213";
export type EncryptedFieldMaskChar = "asterisk" | "X";
export type EncryptedFieldMaskType = "all" | "creditCard" | "ssn" | "lastFour" | "sin" | "nino";
export type EncryptionScheme = "None" | "ProbabilisticEncryption" | "CaseSensitiveDeterministicEncryption" | "CaseInsensitiveDeterministicEncryption";
export type EnforcementType = "Scoping" | "Restrict";
export type EscalationStartTimeType = "CaseCreation" | "CaseLastModified";
export type Expiration = "ThirtyDays" | "SixtyDays" | "NinetyDays" | "SixMonths" | "OneYear" | "Never";
export type ExtendedErrorCode = "ACTIONCALL_DUPLICATE_INPUT_PARAM" | "ACTIONCALL_DUPLICATE_OUTPUT_PARAM" | "ACTIONCALL_MISSING_NAME" | "ACTIONCALL_MISSING_REQUIRED_PARAM" | "ACTIONCALL_MISSING_REQUIRED_TYPE" | "ACTIONCALL_NOT_FOUND_WITH_NAME_AND_TYPE" | "ACTIONCALL_NOT_SUPPORTED_FOR_PROCESSTYPE" | "APEXCALLOUT_INPUT_DUPLICATE" | "APEXCALLOUT_INPUT_INCOMPATIBLE_DATATYPE" | "APEXCALLOUT_INVALID" | "APEXCALLOUT_MISSING_CLASSNAME" | "APEXCALLOUT_NOT_FOUND" | "APEXCALLOUT_OUTPUT_INCOMPATIBLE_DATATYPE" | "APEXCALLOUT_OUTPUT_NOT_FOUND" | "APEXCALLOUT_REQUIRED_INPUT_MISSING" | "APEXCLASS_MISSING_INTERFACE" | "APEX_CLASS_VARIABLE_NOT_FOUND" | "ASSIGNMENTITEM_ELEMENT_MISSING_DATATYPE" | "ASSIGNMENTITEM_ELEMENT_NOT_SUPPORTED" | "ASSIGNMENTITEM_FIELD_INVALID_DATATYPE" | "ASSIGNMENTITEM_FIELD_INVALID_DATATYPE_WITH_ELEMENT" | "ASSIGNMENTITEM_INCOMPATIBLE_DATATYPES" | "ASSIGNMENTITEM_INVALID_ASSIGNTOREFERENCE" | "ASSIGNMENTITEM_INVALID_COLLECTION" | "ASSIGNMENTITEM_INVALID_DATATYPE_IN_ELEMENT" | "ASSIGNMENTITEM_INVALID_ELEMENTREFERENCE" | "ASSIGNMENTITEM_INVALID_MERGE_FIELD" | "ASSIGNMENTITEM_INVALID_OPERATOR" | "ASSIGNMENTITEM_INVALID_REFERENCE" | "ASSIGNMENTITEM_INVALID_VALUE" | "ASSIGNMENTITEM_LEFT_DATATYPE_INVALID_FOR_OPERATOR" | "ASSIGNMENTITEM_MODIFIES_NONVARIABLE" | "ASSIGNMENTITEM_NONEXISTENT_REFERENCE" | "ASSIGNMENTITEM_REQUIRED" | "ASSIGNMENTITEM_RIGHT_DATATYPE_INVALID_FOR_OPERATOR" | "AUTOLAUNCHED_CHOICELOOKUP_NOT_SUPPORTED" | "AUTOLAUNCHED_CHOICE_NOT_SUPPORTED" | "AUTOLAUNCHED_SCREEN_NOT_SUPPORTED" | "AUTOLAUNCHED_STEP_NOT_SUPPORTED" | "AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE" | "AUTOLAUNCHED_WAIT_NOT_SUPPORTED" | "BOTH_START_NODE_AND_REFERENCE_FOUND" | "CHOICEFIELD_DEFAULT_CHOICE_NOT_FOUND" | "CHOICEFIELD_MISSING_CHOICE" | "CHOICELOOKUP_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD" | "CHOICE_DATATYPE_INCOMPATIBLE_WITH_CHOICEFIELD" | "CHOICE_NOT_SUPPORTED_FOR_SCREENFIELDTYPE" | "CHOICE_USED_MULTIPLE_TIMES_IN_SAME_FIELD" | "CONDITION_BUILDER_MISSING_FLOW_VARIABLE" | "CONDITION_BUILDER_MISSING_REQUIRED_PERMISSIONS" | "CONDITION_BUILDER_UNSUPPORTED_FLOW_VARIABLE" | "CONDITION_DATATYPE_INCOMPATIBLE" | "CONDITION_DATATYPE_INCOMPATIBLE_WITH_ELEMENT" | "CONDITION_ELEMENT_DATATYPES_INCOMPATIBLE" | "CONDITION_INVALID_LEFTOPERAND" | "CONDITION_INVALID_LEFT_ELEMENT" | "CONDITION_LOGIC_EXCEEDS_LIMIT" | "CONDITION_LOGIC_INVALID" | "CONDITION_LOGIC_MISSING" | "CONDITION_MISSING_DATATYPE" | "CONDITION_MISSING_OPERATOR" | "CONDITION_OPERAND_DATATYPES_INCOMPATIBLE" | "CONDITION_OPERATOR_INCOMPATIBLE" | "CONDITION_REFERENCED_ELEMENT_NOT_FOUND" | "CONDITION_RIGHTOPERAND_NULL" | "CONNECTOR_MISSING_TARGET" | "CONSTANT_INCLUDES_REFERENCES" | "CUSTOMEVENTS_NOT_ENABLED" | "CUSTOMEVENT_MISSING_PROCESSMETADATAVALUES" | "CUSTOMEVENT_OBJECTTYPE_NOT_FOUND" | "CUSTOMEVENT_OBJECTTYPE_NOT_SUPPORTED" | "CUSTOMEVENT_PROCESSMETADATAVALUES_MISSING_NAME" | "CUSTOMEVENT_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME" | "DATATYPE_INVALID" | "DATATYPE_MISSING" | "DATA_TYPE_NOT_SUPPORTED_FOR_PROCESSTYPE" | "DECISION_DEFAULT_CONNECTOR_MISSING_LABEL" | "DECISION_MISSING_OUTCOME" | "ELEMENT_CONNECTS_TO_SELF" | "ELEMENT_COORDINATES_INVALID" | "ELEMENT_INVALID_CONNECTOR" | "ELEMENT_INVALID_REFERENCE" | "ELEMENT_MISSING_CONNECTOR" | "ELEMENT_MISSING_LABEL" | "ELEMENT_MISSING_NAME" | "ELEMENT_MISSING_REFERENCE" | "ELEMENT_MORE_THAN_ONE_FIELD" | "ELEMENT_NAME_INVALID" | "ELEMENT_NEVER_USED" | "ELEMENT_SCALE_SMALLER_THAN_DEFAULTVALUE" | "EXTERNAL_OBJECTS_NOT_SUPPORTED" | "EXTERNAL_OBJECT_FIELDS_NOT_SUPPORTED" | "EX_AUTOLAUNCHED_SUBFLOW_INCOMPATIBLE_FLOWTYPE" | "FIELDASSIGNMENT_FIELD_INCOMPATIBLE_DATATYPE" | "FIELDASSIGNMENT_INVALID_DATATYPE" | "FIELDASSIGNMENT_INVALID_ELEMENT" | "FIELDASSIGNMENT_INVALID_REFERENCE" | "FIELDASSIGNMENT_MULTIPLE_REFERENCES_SAME_FIELD" | "FIELDASSIGNMENT_PICKLISTFIELD_INCOMPATIBLE_DATATYPE" | "FIELDASSIGNMENT_REFERENCED_ELEMENT_MISSING_DATATYPE" | "FIELDSERVICE_UNSUPPORTED_FIELD_TYPE" | "FIELD_INVALID_VALUE" | "FIELD_NOT_FOUND" | "FIELD_RELATIONSHIP_NOT_SUPPORTED" | "FLEXIPAGE_COMPONENT_ATTRIBUTE_EXPRESSION_EXCEPTION" | "FLEXIPAGE_COMPONENT_ATTRIBUTE_GENERIC_EXCEPTION" | "FLEXIPAGE_COMPONENT_ATTRIBUTE_MISSING_REQUIRED" | "FLEXIPAGE_COMPONENT_ATTRIBUTE_TOO_LONG" | "FLEXIPAGE_COMPONENT_CUSTOM_VALIDATION_EXCEPTION" | "FLEXIPAGE_COMPONENT_MAX_LIMIT_EXCEPTION" | "FLEXIPAGE_COMPONENT_RULE_VALIDATION_EXCEPTION" | "FLEXIPAGE_PICKLIST_INVALID_VALUE_EXCEPTION" | "FLEXIPAGE_TEMPLATE_INVALID_SWITCH" | "FLOW_ELEMENT_SCALE_LESS_THAN_ZERO" | "FLOW_INCLUDES_STEP" | "FLOW_INTERVIEW_BULK_EXECUTION" | "FLOW_INTERVIEW_HANDLED_ERROR" | "FLOW_INTERVIEW_INPUT_VALIDATION" | "FLOW_INTERVIEW_INTERACTION_NOT_FOUND" | "FLOW_INTERVIEW_INVALID_CHOICE_USER_INPUT" | "FLOW_INTERVIEW_INVALID_FIELD_VALUE" | "FLOW_INTERVIEW_INVALID_START_REQUEST" | "FLOW_INTERVIEW_LIMIT_EXCEEDED" | "FLOW_INTERVIEW_MISSING_CHOICE_FOR_REQUIRED_CHOICE_FIELD" | "FLOW_INTERVIEW_MISSING_VALUE_FOR_REQUIRED_INPUT_FIELD" | "FLOW_INTERVIEW_NAVIGATE" | "FLOW_INTERVIEW_RANGE_VALIDATION" | "FLOW_INTERVIEW_REGEX_VALIDATION" | "FLOW_INTERVIEW_RESUME_INTERVIEW" | "FLOW_INTERVIEW_SAVE_RESULT" | "FLOW_INTERVIEW_SET_CHOICE_SELECTED" | "FLOW_INTERVIEW_START_INTERVIEW" | "FLOW_INTERVIEW_TYPE_CONVERSION" | "FLOW_INVALID_NAME" | "FLOW_NAME_USED_IN_OTHER_CLIENT" | "FLOW_REFERENCES_APEX_CLASS_NOT_IN_SAME_PACKAGE" | "FLOW_SCHEDULE_INFORMATION_INCOMPLETE" | "FLOW_STAGE_INCLUDES_REFERENCES" | "FLOW_STAGE_ORDER_DUPLICATE" | "FLOW_STAGE_ORDER_OUT_OF_RANGE" | "FLOW_SYSTEM_VARIABLE_NOT_SUPPORTED_FOR_TRIGGERTYPE" | "FORMULA_CMT_LIMIT_EXCEEDED" | "FORMULA_EXPRESSION_INVALID" | "GLOBAL_VARIABLE_NOT_SUPPORTED_FOR_PROCESSTYPE" | "INPUTPARAM_INCOMPATIBLE_DATATYPE" | "INPUTPARAM_INCOMPATIBLE_WITH_COLLECTION_VARIABLE" | "INPUTPARAM_INCOMPATIBLE_WITH_NONCOLLECTION_VARIABLE" | "INPUTPARAM_MISMATCHED_OBJECTTYPE" | "INVALID_FLOW" | "INVALID_FLOW_INTERVIEW" | "INVALID_SURVEY_VARIABLE_NAME_OR_TYPE" | "LOOP_ASSIGNNEXTVALUETO_MISMATCHED_DATATYPE" | "LOOP_ASSIGNNEXTVALUETO_MISMATCHED_OBJECTTYPE" | "LOOP_ASSIGNNEXTVALUETO_MISSING" | "LOOP_ASSIGNNEXTVALUETO_MISSING_VARIABLE" | "LOOP_ASSIGNNEXTVALUETO_REFERENCE_NOT_FOUND" | "LOOP_COLLECTION_ELEMENT_NOT_FOUND" | "LOOP_COLLECTION_NOT_FOUND" | "LOOP_COLLECTION_NOT_SUPPORTED_FOR_FIELD" | "LOOP_MISSING_COLLECTION" | "NON_EXPOSED_COMPONENT_IN_FLOW" | "NON_GLOBAL_COMPONENT_IN_EXPORTED_FLOW" | "OBJECTTYPE_INVALID" | "OBJECT_CANNOT_BE_CREATED" | "OBJECT_CANNOT_BE_DELETED" | "OBJECT_CANNOT_BE_QUERIED" | "OBJECT_CANNOT_BE_UPDATED" | "OBJECT_ENCRYPTED_FIELDS_NOT_SUPPORTED" | "OBJECT_NOT_FOUND" | "OBJECT_TYPE_DOES_NOT_EXIST" | "OUTPUTPARAM_ASSIGNTOREFERENCE_NOTFOUND" | "OUTPUTPARAM_INCOMPATIBLE_DATATYPE" | "OUTPUTPARAM_MISMATCHED_OBJECTTYPE" | "OUTPUTPARAM_MISMATCHED_WITH_COLLECTION_VARIABLE" | "OUTPUTPARAM_MISSING_ASSIGNTOREFERENCE" | "OUTPUTPARAM_MISTMATCHED_WITH_NONCOLLECTION_VARIABLE" | "PARAM_DATATYPE_NOT_SUPPORTED" | "PAST_SCHEDULE_FLOW_WILL_NOT_RUN" | "PROCESSMETADATAVALUES_NOT_SUPPORTED_FOR_PROCESSTYPE" | "PROCESSMETADATAVALUE_NONEXISTENT_ELEMENT" | "PROCESSTYPE_COMPONENTTYPE_NOT_SUPPORTED" | "PROCESSTYPE_ELEMENT_CONFIG_NOT_SUPPORTED" | "PROCESSTYPE_ELEMENT_NOT_SUPPORTED" | "PROCESSTYPE_NOT_SUPPORTED" | "PROCESSTYPE_SCREEN_FIELDTYPE_NOT_SUPPORTED" | "PROCESS_TYPE_INCOMPATIBLE" | "RECOMMENDATION_STRATEGY_EXCEPTION" | "RECORDFILTER_ENCRYPTED_FIELDS_NOT_SUPPORTED" | "RECORDFILTER_GEOLOCATION_FIELDS_NOT_SUPPORTED" | "RECORDFILTER_INVALID_DATATYPE" | "RECORDFILTER_INVALID_ELEMENT" | "RECORDFILTER_INVALID_OPERATOR" | "RECORDFILTER_INVALID_REFERENCE" | "RECORDFILTER_MISSING_DATATYPE" | "RECORDFILTER_MULTIPLE_QUERIES_SAME_FIELD" | "RECORDFILTER_NON_PRIMITIVE" | "RECORDLOOKUP_IDASSIGNMENT_VARIABLE_INCOMPATIBLE_DATATYPE" | "RECORDLOOKUP_IDASSIGNMENT_VARIABLE_NOT_FOUND" | "RECORDUPDATE_MISSING_FILTERS" | "REFERENCED_ELEMENT_NOT_FOUND" | "RULE_MISSING_CONDITION" | "SCREENCOMPONENT_CONTAINS_VISIBILITY_RULE" | "SCREENFIELD_API_VERSION_NOT_SUPPORTED" | "SCREENFIELD_BOOLEAN_ISREQUIRED_IS_FALSE" | "SCREENFIELD_DEFAULTVALUE_NOT_SUPPORTED" | "SCREENFIELD_EXTENSION_DUPLICATE_INPUT_PARAM" | "SCREENFIELD_EXTENSION_DUPLICATE_OUTPUT_PARAM" | "SCREENFIELD_EXTENSION_IMPLEMENTATION_INVALID" | "SCREENFIELD_EXTENSION_INPUT_ATTRIBUTE_INVALID" | "SCREENFIELD_EXTENSION_NAME_INVALID" | "SCREENFIELD_EXTENSION_NAME_MISSING" | "SCREENFIELD_EXTENSION_NAME_NOT_SUPPORTED" | "SCREENFIELD_EXTENSION_OUTPUT_ATTRIBUTE_INVALID" | "SCREENFIELD_EXTENSION_REQUIRED_INPUT_MISSING" | "SCREENFIELD_INPUTS_NOT_SUPPORTED" | "SCREENFIELD_INVALID_DATATYPE" | "SCREENFIELD_MULTISELECTCHOICE_SEMICOLON_NOT_SUPPORTED" | "SCREENFIELD_OUTPUTS_NOT_SUPPORTED" | "SCREENFIELD_TYPE_NOT_SUPPORTED" | "SCREENFIELD_USERINPUT_NOT_SUPPORTED_FOR_CHOICETYPE" | "SCREENFIELD_VALIDATIONRULE_NOT_SUPPORTED" | "SCREENRULE_ACTION_INVALID_ATTRIBUTE" | "SCREENRULE_ACTION_INVALID_ATTRIBUTE_FOR_API_VERSION" | "SCREENRULE_ACTION_INVALID_VALUE" | "SCREENRULE_ACTION_MISSING_ATTRIBUTE" | "SCREENRULE_ACTION_MISSING_FIELDREFERENCE" | "SCREENRULE_ACTION_MISSING_VALUE" | "SCREENRULE_ATTRIBUTE_NOT_SUPPORTED_FOR_SCREENFIELD" | "SCREENRULE_FIELD_NOT_FOUND_ON_SCREEN" | "SCREENRULE_MISSING_ACTION" | "SCREENRULE_NOT_SUPPORTED_IN_ORG" | "SCREENRULE_SCREENFIELD_NOT_VISIBLE" | "SCREENRULE_VISIBILITY_NOT_SUPPORTED_IN_ORG" | "SCREEN_ALLOWBACK_ALLOWFINISH_BOTH_FALSE" | "SCREEN_CONTAINS_LIGHTNING_COMPONENT" | "SCREEN_MISSING_FOOTER_AND_LIGHTNING_COMPONENT" | "SCREEN_MISSING_LABEL" | "SCREEN_MULTISELECTFIELD_DOESNT_SUPPORT_CHOICE_WITH_USERINPUT" | "SCREEN_PAUSEDTEXT_NOT_SHOWN_WHEN_ALLOWPAUSE_IS_FALSE" | "SETTING_FIELD_MAKES_OTHER_FIELD_REQUIRED" | "SETTING_FIELD_MAKES_OTHER_FIELD_UNSUPPORTED" | "SETTING_FIELD_VALUE_MAKES_OTHER_FIELD_UNSUPPORTED" | "SOBJECT_ELEMENT_INCOMPATIBLE_DATATYPE" | "SOBJECT_ELEMENT_MISMATCHED_OBJECTTYPE" | "SORT_ENCRYPTED_FIELDS_NOT_SUPPORTED" | "SORT_FIELD_MISSING" | "SORT_FIELD_NOT_SUPPORTED" | "SORT_GEOLOCATION_FIELDS_NOT_SUPPORTED" | "SORT_LIMIT_INVALID" | "SORT_ORDER_MISSING" | "SPECIFIC_FIELD_VALUE_MAKES_OTHER_FIELD_REQUIRED" | "STAGE_NAME_NOT_FULLY_QUALIFIED" | "START_ELEMENT_MISSING" | "SUBFLOW_DESKTOP_DESIGNER_FLOWS_NOT_SUPPORTED" | "SUBFLOW_INPUT_ELEMENT_INCOMPATIBLE_DATATYPES" | "SUBFLOW_INPUT_INVALID_VALUE" | "SUBFLOW_INPUT_MISMATCHED_COLLECTIONTYPES" | "SUBFLOW_INPUT_MISMATCHED_OBJECTS" | "SUBFLOW_INPUT_MISSING_NAME" | "SUBFLOW_INPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE" | "SUBFLOW_INPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE" | "SUBFLOW_INPUT_VALUE_INCOMPATIBLE_DATATYPES" | "SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW" | "SUBFLOW_INPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW" | "SUBFLOW_INPUT_VARIABLE_NO_INPUT_ACCESS" | "SUBFLOW_INVALID_NAME" | "SUBFLOW_INVALID_REFERENCE" | "SUBFLOW_MASTER_FLOW_TYPE_NOT_AUTOLAUNCHED" | "SUBFLOW_MISSING_NAME" | "SUBFLOW_NO_ACTIVE_VERSION" | "SUBFLOW_OUTPUT_INCOMPATIBLE_DATATYPES" | "SUBFLOW_OUTPUT_MISMATCHED_COLLECTIONTYPES" | "SUBFLOW_OUTPUT_MISMATCHED_OBJECTS" | "SUBFLOW_OUTPUT_MISSING_ASSIGNTOREFERENCE" | "SUBFLOW_OUTPUT_MISSING_NAME" | "SUBFLOW_OUTPUT_MULTIPLE_ASSIGNMENTS_TO_ONE_VARIABLE" | "SUBFLOW_OUTPUT_REFERENCES_FIELD_ON_SOBJECT_VARIABLE" | "SUBFLOW_OUTPUT_TARGET_DOES_NOT_EXIST_IN_MASTER_FLOW" | "SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_MASTERFLOW" | "SUBFLOW_OUTPUT_VARIABLE_NOT_FOUND_IN_REFERENCEDFLOW" | "SUBFLOW_OUTPUT_VARIABLE_NO_OUTPUT_ACCESS" | "SUBFLOW_PROCESSTYPE_NOT_SUPPORTED" | "SUBFLOW_PROCESS_TYPE_INCOMPATIBLE" | "SUBFLOW_REFERENCES_MASTERFLOW" | "SURVEY_ADVANCED_CONDITION_LOGIC_NOT_SUPPORTED" | "SURVEY_CHOICE_NOT_REFERENCED_BY_A_QUESTION" | "SURVEY_CHOICE_REFERENCED_BY_MULTIPLE_QUESTIONS" | "SURVEY_ELEMENT_NEVER_REACHED" | "SURVEY_INACTIVE_SUBFLOWS" | "SURVEY_MISSING_QUESTION_OR_SUBFLOW" | "SURVEY_MISSING_REQUIRED_VARIABLES" | "SURVEY_MULTIPLE_SCREENS_CANNOT_CONNECT_TO_SAME_DECISION" | "SURVEY_NESTED_SUBFLOWS" | "SURVEY_NONSURVEY_SUBFLOWS" | "SURVEY_RULE_INVALID_RIGHT_OPERAND" | "SURVEY_SCREENFIELD_TYPE_NOT_SUPPORTED_FOR_QUESTION" | "SURVEY_START_ELEMENT_INVALID" | "SURVEY_VARIABLE_ACCESS_INVALID" | "TRIGGER_TYPE_INCOMPATIBLE_WITH_PROCESS_TYPE" | "UNEXPECTED_ERROR" | "VALUE_CHAR_LIMIT_EXCEEDED" | "VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE" | "VARIABLE_FIELD_NOT_SUPPORTED_FOR_DATATYPE_AND_COLLECTION" | "VARIABLE_FIELD_REQUIRED_FOR_DATATYPE" | "VARIABLE_SCALE_EXCEEDS_LIMIT" | "VARIABLE_SCALE_NEGATIVE_INTEGER" | "VARIABLE_SCALE_NULL" | "VISIBILITY_RULE_EXCEEDS_CONDITION_LIMIT" | "VISIBILITY_RULE_NOT_AVAILABLE_IN_ORG" | "VISIBILITY_RULE_NOT_SUPPORTED" | "VISIBILITY_RULE_NOT_SUPPORTED_FOR_API_VERSION" | "VISIBILITY_RULE_NOT_SUPPORTED_FOR_PROCESSTYPE" | "VISIBILITY_RULE_NO_CONDITIONS" | "WAITEVENT_DEFAULT_CONNECTOR_MISSING_LABEL" | "WAITEVENT_DUPLICATE_INPUT_PARAM" | "WAITEVENT_INPUT_NOT_SUPPORTED_FOR_EVENTTYPE" | "WAITEVENT_INPUT_REQUIRES_LITERAL_VALUE" | "WAITEVENT_INVALID_CONDITION_LOGIC" | "WAITEVENT_MISSING" | "WAITEVENT_MISSING_CONNECTOR" | "WAITEVENT_MISSING_EVENTTYPE" | "WAITEVENT_OBJECT_NOT_SUPPORTED_FOR_EVENTTYPE" | "WAITEVENT_OUTPUT_NOT_SUPPORTED_FOR_EVENTTYPE" | "WAITEVENT_RELATIVEALARM_INVALID_DATETIME_FIELD" | "WAITEVENT_RELATIVEALARM_INVALID_FIELD" | "WAITEVENT_RELATIVEALARM_INVALID_OBJECTTYPE" | "WAITEVENT_RELATIVEALARM_INVALID_OFFSETNUMBER" | "WAITEVENT_RELATIVEALARM_INVALID_OFFSETUNIT" | "WAITEVENT_REQUIRED_INPUT_MISSING" | "WAITEVENT_TYPE_INVALID_OR_NOT_SUPPORTED" | "WORKFLOW_MISSING_PROCESSMETADATAVALUES" | "WORKFLOW_OBJECTTYPE_NOT_FOUND" | "WORKFLOW_OBJECTTYPE_NOT_SUPPORTED" | "WORKFLOW_OBJECTVARIABLE_AND_OLDOBJECTVARIABLE_REFERENCE_SAME_SOBJECT_VARIABLE" | "WORKFLOW_OBJECTVARIABLE_DOESNT_SUPPORT_INPUT" | "WORKFLOW_OLDOBJECTVARIABLE_DOESNT_SUPPORT_INPUT" | "WORKFLOW_PROCESSMETADATAVALUES_MORE_THAN_ONE_NAME" | "WORKFLOW_PROCESS_METADATAVALUES_MISSING_NAME" | "WORKFLOW_RECURSIVECOUNTVARIABLE_DOESNT_SUPPORT_INPUT" | "WORKFLOW_TRIGGERTYPE_INVALID_VALUE";
export type ExternalDataSourceType = "bcpApp" | "bcpAppMember" | "bcpEntity" | "bcpField" | "bcpMember" | "bcpParticipant" | "contentHubItem" | "conversationeventlog" | "Datajourney" | "OpenSearch" | "Identity" | "outgoingemail" | "recommendation" | "SimpleURL" | "Wrapper";
export type ExternalPrincipalType = "Anonymous" | "PerUser" | "NamedUser";
export type FeedItemDisplayFormat = "Default" | "HideBlankLines";
export type FeedItemType = "TrackedChange" | "UserStatus" | "TextPost" | "AdvancedTextPost" | "LinkPost" | "ContentPost" | "PollPost" | "RypplePost" | "ProfileSkillPost" | "DashboardComponentSnapshot" | "ApprovalPost" | "CaseCommentPost" | "ReplyPost" | "EmailMessageEvent" | "CallLogPost" | "ChangeStatusPost" | "AttachArticleEvent" | "MilestoneEvent" | "ActivityEvent" | "ChatTranscriptPost" | "CollaborationGroupCreated" | "CollaborationGroupUnarchived" | "SocialPost" | "QuestionPost" | "FacebookPost" | "BasicTemplateFeedItem" | "CreateRecordEvent" | "CanvasPost" | "AnnouncementPost";
export type FeedItemVisibility = "AllUsers" | "InternalUsers";
export type FeedLayoutComponentType = "HelpAndToolLinks" | "CustomButtons" | "Following" | "Followers" | "CustomLinks" | "Milestones" | "Topics" | "CaseUnifiedFiles" | "Visualforce";
export type FeedLayoutFilterPosition = "CenterDropDown" | "LeftFixed" | "LeftFloat";
export type FeedLayoutFilterType = "AllUpdates" | "FeedItemType" | "Custom";
export type FieldManageability = "DeveloperControlled" | "SubscriberControlled" | "Locked";
export type FieldType = "AutoNumber" | "Lookup" | "MasterDetail" | "Checkbox" | "Currency" | "Date" | "DateTime" | "Email" | "Number" | "Percent" | "Phone" | "Picklist" | "MultiselectPicklist" | "Text" | "TextArea" | "LongTextArea" | "Html" | "Url" | "EncryptedText" | "Summary" | "Hierarchy" | "File" | "MetadataRelationship" | "Location" | "ExternalLookup" | "IndirectLookup" | "CustomDataType" | "Time";
export type FieldUpdateOperation = "Formula" | "Literal" | "Null" | "NextValue" | "PreviousValue" | "LookupValue";
export type FileDownloadBehavior = "DOWNLOAD" | "EXECUTE_IN_BROWSER" | "HYBRID";
export type FileType = "UNKNOWN" | "PDF" | "POWER_POINT" | "POWER_POINT_X" | "POWER_POINT_M" | "POWER_POINT_T" | "WORD" | "WORD_X" | "WORD_M" | "WORD_T" | "PPS" | "PPSX" | "EXCEL" | "EXCEL_X" | "EXCEL_M" | "EXCEL_T" | "GOOGLE_DOCUMENT" | "GOOGLE_PRESENTATION" | "GOOGLE_SPREADSHEET" | "GOOGLE_DRAWING" | "GOOGLE_FORM" | "GOOGLE_SCRIPT" | "LINK" | "SLIDE" | "AAC" | "ACGI" | "AI" | "AVI" | "BMP" | "BOXNOTE" | "CSV" | "EPS" | "EXE" | "FLASH" | "GIF" | "GZIP" | "HTM" | "HTML" | "HTX" | "JPEG" | "JPE" | "PJP" | "PJPEG" | "JFIF" | "JPG" | "JS" | "JSON" | "MHTM" | "MHTML" | "MP3" | "M4A" | "M4V" | "MP4" | "MPEG" | "MPG" | "MOV" | "MSG" | "ODP" | "ODS" | "ODT" | "OGV" | "PNG" | "PSD" | "RTF" | "QUIPDOC" | "QUIPSHEET" | "QUIPCHAT" | "QUIPSLIDES" | "SHTM" | "SHTML" | "SNOTE" | "MCONTENT" | "STYPI" | "SVG" | "SVGZ" | "JPGZ" | "TEXT" | "THTML" | "VISIO" | "WMV" | "WRF" | "XML" | "ZIP" | "XZIP" | "WMA" | "XSN" | "TRTF" | "TXML" | "WEBVIEW" | "RFC822" | "ASF" | "DWG" | "JAR" | "XJS" | "OPX" | "XPSD" | "TIF" | "TIFF" | "WAV" | "CSS" | "THUMB720BY480" | "THUMB240BY180" | "THUMB120BY90" | "ALLTHUMBS" | "PAGED_FLASH" | "XMOB" | "PACK" | "C" | "CPP" | "WORDT" | "INI" | "JAVA" | "LOG" | "POWER_POINTT" | "SQL" | "XHTML" | "EXCELT";
export type FilterOperation = "equals" | "notEqual" | "lessThan" | "greaterThan" | "lessOrEqual" | "greaterOrEqual" | "contains" | "notContain" | "startsWith" | "includes" | "excludes" | "within";
export type FilterScope = "Everything" | "Mine" | "Queue" | "Delegated" | "MyTerritory" | "MyTeamTerritory" | "Team" | "AssignedToMe" | "MineAndMyGroups";
export type FlexiPageRegionMode = "Append" | "Prepend" | "Replace";
export type FlexiPageRegionType = "Region" | "Facet" | "Background";
export type FlexiPageType = "AppPage" | "ObjectPage" | "RecordPage" | "HomePage" | "MailAppAppPage" | "CommAppPage" | "CommForgotPasswordPage" | "CommLoginPage" | "CommObjectPage" | "CommQuickActionCreatePage" | "CommRecordPage" | "CommRelatedListPage" | "CommSearchResultPage" | "CommGlobalSearchResultPage" | "CommSelfRegisterPage" | "CommThemeLayoutPage" | "UtilityBar" | "RecordPreview" | "EmbeddedServicePage" | "CommCheckoutPage" | "CommOrderConfirmationPage" | "CommFlowPage" | "EmailTemplatePage";
export type FlowAssignmentOperator = "Assign" | "Add" | "Subtract" | "AddItem" | "RemoveFirst" | "RemoveBeforeFirst" | "RemoveAfterFirst" | "RemoveAll" | "AddAtStart" | "RemoveUncommon" | "AssignCount" | "RemovePosition";
export type FlowComparisonOperator = "EqualTo" | "NotEqualTo" | "GreaterThan" | "LessThan" | "GreaterThanOrEqualTo" | "LessThanOrEqualTo" | "StartsWith" | "EndsWith" | "Contains" | "IsNull" | "WasSet" | "WasSelected" | "WasVisited";
export type FlowDataType = "Currency" | "Date" | "Number" | "String" | "Boolean" | "SObject" | "DateTime" | "Picklist" | "Multipicklist" | "Apex";
export type FlowProcessType = "AutoLaunchedFlow" | "Flow" | "Workflow" | "CustomEvent" | "InvocableProcess" | "LoginFlow" | "ActionPlan" | "JourneyBuilderIntegration" | "UserProvisioningFlow" | "Survey" | "Appointments" | "FSCLending" | "DigitalForm" | "FieldServiceMobile" | "OrchestrationFlow" | "FieldServiceWeb" | "TransactionSecurityFlow" | "ContactRequestFlow" | "ActionCadenceFlow" | "ManagedContentFlow" | "CheckoutFlow" | "CartAsyncFlow" | "SalesEntryExperienceFlow" | "DecisionStudio" | "Journey";
export type FlowRecordFilterOperator = "EqualTo" | "NotEqualTo" | "GreaterThan" | "LessThan" | "GreaterThanOrEqualTo" | "LessThanOrEqualTo" | "StartsWith" | "EndsWith" | "Contains" | "IsNull";
export type FlowScreenFieldType = "DisplayText" | "InputField" | "LargeTextArea" | "PasswordField" | "RadioButtons" | "DropdownBox" | "MultiSelectCheckboxes" | "MultiSelectPicklist" | "ComponentInstance" | "ComponentInput" | "ComponentChoice" | "ComponentMultiChoice" | "ComponentDisplay";
export type FlowStartFrequency = "Once" | "Daily" | "Weekly";
export type FlowTriggerType = "Scheduled";
export type FlowVersionStatus = "Active" | "Draft" | "Obsolete" | "InvalidDraft";
export type FolderAccessTypes = "Shared" | "Public" | "Hidden" | "PublicInternal";
export type FolderShareAccessLevel = "View" | "EditAllContents" | "Manage";
export type FolderSharedToType = "Group" | "Role" | "RoleAndSubordinates" | "RoleAndSubordinatesInternal" | "Manager" | "ManagerAndSubordinatesInternal" | "Organization" | "Territory" | "TerritoryAndSubordinates" | "AllPrmUsers" | "User" | "PartnerUser" | "AllCspUsers" | "CustomerPortalUser" | "PortalRole" | "PortalRoleAndSubordinates" | "ChannelProgramGroup";
export type ForecastCategories = "Omitted" | "Pipeline" | "BestCase" | "Forecast" | "Closed";
export type ForecastingDateType = "OpportunityCloseDate" | "ProductDate" | "ScheduleDate";
export type FormFactor = "Small" | "Medium" | "Large";
export type FormSectionTabOrder = "TopToBottom" | "LeftToRight";
export type FormulaFilterType = "AllCriteriaMatch" | "AnyCriterionMatches" | "CustomLogicMatches";
export type Gender = "Neuter" | "Masculine" | "Feminine" | "AnimateMasculine" | "ClassI" | "ClassIII" | "ClassV" | "ClassVII" | "ClassIX" | "ClassXI" | "ClassXIV" | "ClassXV" | "ClassXVI" | "ClassXVII" | "ClassXVIII";
export type ID = string;
export type InvocableActionType = "apex" | "chatterPost" | "contentWorkspaceEnableFolders" | "emailAlert" | "emailSimple" | "externalService" | "flow" | "metricRefresh" | "quickAction" | "submit" | "thanks" | "thunderResponse" | "createServiceReport" | "deployOrchestration" | "createResponseEventAction" | "sfdcOutputAction" | "invokeOrchOutputFlow" | "generateWorkOrders" | "deactivateSessionPermSet" | "activateSessionPermSet" | "aggregateValue" | "orchestrationTimer" | "orchestrationDebugLog" | "choosePricebook" | "component" | "liveMessageNotification" | "scaleCacheAsyncRefresh" | "skillsBasedRouting" | "createCustomField" | "assignTrailheadBadge" | "insightFeedback" | "publishKnowledgeArticles" | "routingAddressVerification" | "assignTargetToSalesCadence" | "removeTargetFromSalesCadence" | "assignKnowledgeArticles" | "createDraftFromOnlineKnowledgeArticle" | "archiveKnowledgeArticles" | "restoreKnowledgeArticleVersion" | "customNotificationAction" | "submitDigitalFormResponse" | "contactRequestAction" | "saveAppointment" | "deleteKnowledgeArticles" | "submitKnowledgeArticleForTranslation" | "einsteinEPLitePredictionAction" | "cartToOrderAction" | "orderToCartAction" | "activateOrderAction" | "refreshActualsCalculation" | "cancelAppointment" | "recalculateForecast" | "managedContentReleasePublish" | "editQuipDocument" | "attachQuipDocumentToRecord" | "createQuipDocument" | "createQuipFolder" | "addUsersToQuipDocument" | "copyQuipDocument" | "addMessageToQuipDocument" | "addQuipDocumentToFolder" | "createQuipChat" | "addMessageToQuipChat" | "addUsersToQuipChat" | "copyQuipContent" | "createFulfillmentOrder" | "createInvoiceFromFulfillmentOrder" | "priceCart" | "cartInitiateAsyncStep" | "cartCompleteAsyncStep" | "cancelOrderItemSummariesPreview" | "cancelOrderItemSummariesSubmit" | "returnOrderItemSummariesPreview" | "returnOrderItemSummariesSubmit" | "cancelFulfillmentOrderItem" | "print" | "exportSurveyResponses" | "createCheckoutSessionAction" | "checkCartInventoryAction" | "calcCartTaxesAction" | "calcCartShipmentAction" | "createCreditMemoOrderSummary" | "ensureRefundsOrderSummaryAsync" | "decisionStudioAction" | "sendSurveyInvitation" | "ensureFundsOrderSummaryAsync" | "publishPardotContent";
export type IterationOrder = "Asc" | "Desc";
export type KnowledgeCaseEditor = "simple" | "standard";
export type KnowledgeLanguageLookupValueType = "User" | "Queue";
export type KnowledgeWorkflowAction = "PublishAsNew" | "Publish";
export type Language = "en_US" | "de" | "es" | "fr" | "it" | "ja" | "sv" | "ko" | "zh_TW" | "zh_CN" | "pt_BR" | "nl_NL" | "da" | "th" | "fi" | "ru" | "es_MX" | "no" | "hu" | "pl" | "cs" | "tr" | "in" | "ro" | "vi" | "uk" | "iw" | "el" | "bg" | "en_GB" | "ar" | "sk" | "pt_PT" | "hr" | "sl" | "fr_CA" | "ka" | "sr" | "sh" | "en_AU" | "en_MY" | "en_IN" | "en_PH" | "en_CA" | "ro_MD" | "bs" | "mk" | "lv" | "lt" | "et" | "sq" | "sh_ME" | "mt" | "ga" | "eu" | "cy" | "is" | "ms" | "tl" | "lb" | "rm" | "hy" | "hi" | "ur" | "bn" | "de_AT" | "de_CH" | "ta" | "ar_DZ" | "ar_BH" | "ar_EG" | "ar_IQ" | "ar_JO" | "ar_KW" | "ar_LB" | "ar_LY" | "ar_MA" | "ar_OM" | "ar_QA" | "ar_SA" | "ar_SD" | "ar_SY" | "ar_TN" | "ar_AE" | "ar_YE" | "zh_SG" | "zh_HK" | "en_HK" | "en_IE" | "en_SG" | "en_ZA" | "fr_BE" | "fr_LU" | "fr_CH" | "de_BE" | "de_LU" | "it_CH" | "nl_BE" | "es_AR" | "es_BO" | "es_CL" | "es_CO" | "es_CR" | "es_DO" | "es_EC" | "es_SV" | "es_GT" | "es_HN" | "es_NI" | "es_PA" | "es_PY" | "es_PE" | "es_PR" | "es_US" | "es_UY" | "es_VE" | "ca" | "af" | "sw" | "zu" | "xh" | "te" | "ml" | "kn" | "mr" | "gu" | "en_NZ" | "mi" | "my" | "eo" | "iw_EO";
export type LayoutHeader = "PersonalTagging" | "PublicTagging";
export type LayoutSectionStyle = "TwoColumnsTopToBottom" | "TwoColumnsLeftToRight" | "OneColumn" | "CustomLinks";
export type LetterheadHorizontalAlignment = "None" | "Left" | "Center" | "Right";
export type LetterheadVerticalAlignment = "None" | "Top" | "Middle" | "Bottom";
export type LightningBoltCategory = "Communications" | "Education" | "FinancialServices" | "Government" | "HealthcareLifeSciences" | "Manufacturing" | "Media" | "Nonprofits" | "ProfessionalServices" | "RealEstate" | "Retail" | "TravelTransportationHospitality" | "HighTech" | "GeneralBusiness";
export type LiveChatButtonInviteEndPosition = "TopLeft" | "Top" | "TopRight" | "Left" | "Center" | "Right" | "BottomLeft" | "Bottom" | "BottomRight";
export type LiveChatButtonInviteStartPosition = "TopLeft" | "TopLeftTop" | "Top" | "TopRightTop" | "TopRight" | "TopRightRight" | "Right" | "BottomRightRight" | "BottomRight" | "BottomRightBottom" | "Bottom" | "BottomLeftBottom" | "BottomLeft" | "BottomLeftLeft" | "Left" | "TopLeftLeft";
export type LiveChatButtonPresentation = "Slide" | "Fade" | "Appear" | "Custom";
export type LiveChatButtonRoutingType = "Choice" | "LeastActive" | "MostAvailable";
export type LiveChatButtonType = "Standard" | "Invite";
export type LockoutInterval = "FifteenMinutes" | "ThirtyMinutes" | "SixtyMinutes" | "Forever";
export type LogCategory = "Db" | "Workflow" | "Validation" | "Callout" | "Apex_code" | "Apex_profiling" | "Visualforce" | "System" | "Wave" | "Nba" | "All";
export type LogCategoryLevel = "None" | "Finest" | "Finer" | "Fine" | "Debug" | "Info" | "Warn" | "Error";
export type LogType = "None" | "Debugonly" | "Db" | "Profiling" | "Callout" | "Detail";
export type LookupValueType = "User" | "Queue" | "RecordType";
export type ManageableState = "released" | "deleted" | "deprecated" | "installed" | "beta" | "unmanaged" | "installedEditable" | "deprecatedEditable";
export type MappingOperation = "Autofill" | "Overwrite";
export type MatchingMethod = "Exact" | "FirstName" | "LastName" | "CompanyName" | "Phone" | "City" | "Street" | "Zip" | "Title";
export type MatchingRuleStatus = "Inactive" | "DeactivationFailed" | "Activating" | "Deactivating" | "Active" | "ActivationFailed";
export type MaxLoginAttempts = "ThreeAttempts" | "FiveAttempts" | "TenAttempts" | "NoLimit";
export type MCNodeType = "TEXT" | "MTEXT" | "RTE" | "IMG" | "NAMEFIELD";
export type MessageType = "Text" | "Facebook" | "Line" | "GoogleHome" | "Alexa" | "Omega" | "AppleBusinessChat" | "WeChat" | "WebChat" | "WhatsApp" | "Phone";
export type MilestoneTimeUnits = "Minutes" | "Hours" | "Days";
export type MilestoneTypeRecurrenceType = "none" | "recursIndependently" | "recursChained";
export type MlSlotClassDataType = "Text" | "Number" | "Boolean" | "Date" | "DateTime" | "Currency";
export type MlSlotClassExtractionType = "Pattern" | "Value";
export type MobExtDisplayMode = "FullScreen";
export type ModerationRuleAction = "Block" | "FreezeAndNotify" | "Review" | "Replace" | "Flag";
export type ModerationRuleType = "Content" | "Rate";
export type MonitoredEvents = "AuditTrail" | "Login" | "Entity" | "DataExport" | "AccessResource";
export type NavType = "Standard" | "Console";
export type NetworkPageOverrideSetting = "Designer" | "VisualForce" | "Standard" | "Configurable";
export type NetworkStatus = "UnderConstruction" | "Live" | "DownForMaintenance";
export type NetworkUserType = "Internal" | "Customer" | "Partner";
export type NextOwnerType = "adhoc" | "user" | "userHierarchyField" | "relatedUserField" | "queue";
export type ObjectFilterOperator = "with" | "without";
export type ObjectRelationshipType = "Direct" | "Indirect" | "Self";
export type PageComponentType = "links" | "htmlArea" | "imageOrNote" | "visualforcePage";
export type PageComponentWidth = "narrow" | "wide";
export type PeriodTypes = "Month" | "Quarter" | "Week" | "Year";
export type PermissionSetTabVisibility = "None" | "Available" | "Visible";
export type PinnedAction = "None" | "Top" | "Bottom";
export type PlatformActionGroupCategory = "Primary" | "Overflow";
export type PlatformActionListContext = "ListView" | "RelatedList" | "ListViewRecord" | "RelatedListRecord" | "Record" | "FeedElement" | "Chatter" | "Global" | "Flexipage" | "MruList" | "MruRow" | "RecordEdit" | "Photo" | "BannerPhoto" | "ObjectHomeChart" | "ListViewDefinition" | "Dockable" | "Lookup" | "Assistant";
export type PlatformActionType = "QuickAction" | "StandardButton" | "CustomButton" | "ProductivityAction" | "ActionLink" | "InvocableAction";
export type PlatformCacheType = "Session" | "Organization";
export type PlatformEventChannelType = "event" | "data";
export type PlatformEventPublishBehavior = "PublishAfterCommit" | "PublishImmediately";
export type PlatformEventType = "HighVolume" | "StandardVolume";
export type PortalRoles = "Executive" | "Manager" | "Worker" | "PersonAccount";
export type PortalType = "CustomerSuccess" | "Partner" | "Network";
export type Possessive = "None" | "First" | "Second";
export type PrivateConnectionDirection = "Inbound" | "Outbound";
export type PrivateConnectionStatus = "Disabled" | "Enabled" | "Incomplete" | "PendingAvailability" | "PendingApproval" | "Refresh";
export type PrivateConnectionType = "AwsPrivateLink";
export type ProcessSubmitterType = "group" | "role" | "user" | "roleSubordinates" | "roleSubordinatesInternal" | "owner" | "creator" | "partnerUser" | "customerPortalUser" | "portalRole" | "portalRoleSubordinates" | "allInternalUsers";
export type PromptDisplayPosition = "TopLeft" | "TopCenter" | "TopRight" | "BottomLeft" | "BottomCenter" | "BottomRight";
export type PromptDisplayType = "DockedComposer" | "FloatingPanel";
export type PromptUserAccess = "Everyone" | "SpecificPermissions";
export type PublicFolderAccess = "ReadOnly" | "ReadWrite";
export type QuestionRestriction = "None" | "DoesNotContainPassword";
export type QuickActionLabel = "LogACall" | "LogANote" | "New" | "NewRecordType" | "Update" | "NewChild" | "NewChildRecordType" | "CreateNew" | "CreateNewRecordType" | "SendEmail" | "QuickRecordType" | "Quick" | "EditDescription" | "Defer" | "ChangeDueDate" | "ChangePriority" | "ChangeStatus" | "SocialPost" | "Escalate" | "EscalateToRecord" | "OfferFeedback" | "RequestFeedback" | "AddRecord" | "AddMember" | "Reply" | "ReplyAll" | "Forward" | "ScheduleAppointment" | "EnrollInProgram" | "ModifyAppointment";
export type QuickActionType = "Create" | "VisualforcePage" | "Post" | "SendEmail" | "LogACall" | "SocialPost" | "Canvas" | "Update" | "LightningComponent" | "Flow" | "MobileExtension";
export type RateLimitTimePeriod = "Short" | "Medium";
export type RecommendationChannel = "DefaultChannel" | "CustomChannel1" | "CustomChannel2" | "CustomChannel3" | "CustomChannel4" | "CustomChannel5";
export type RecommendationConditionOperator = "EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL_TO" | "LESS_THAN" | "LESS_THAN_OR_EQUAL_TO" | "NOT_EQUALS" | "LIKE" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS";
export type RecommendationConditionValueType = "TEXT" | "NUMBER" | "BOOLEAN" | "DATE" | "DATE_TIME" | "TIME";
export type RecordActionType = "Flow" | "QuickAction";
export type RecordEditabilityType = "AdminOnly" | "AdminOrCurrentApprover";
export type RegionFlagStatus = "disabled" | "enabled";
export type ReportAggregateDatatype = "currency" | "percent" | "number";
export type ReportAggrType = "Sum" | "Average" | "Maximum" | "Minimum" | "Unique" | "RowCount";
export type ReportBucketFieldType = "text" | "number" | "picklist";
export type ReportChartComponentSize = "SMALL" | "MEDIUM" | "LARGE";
export type ReportChartSize = "Tiny" | "Small" | "Medium" | "Large" | "Huge";
export type ReportFormat = "MultiBlock" | "Matrix" | "Summary" | "Tabular";
export type ReportFormulaNullTreatment = "n" | "z";
export type ReportJobSourceTypes = "tabular" | "summary" | "snapshot";
export type ReportSortType = "Column" | "Aggregate" | "CustomSummaryFormula";
export type ReportSummaryType = "Sum" | "Average" | "Maximum" | "Minimum" | "Unique" | "None";
export type ReportTypeCategory = "accounts" | "opportunities" | "forecasts" | "cases" | "leads" | "campaigns" | "activities" | "busop" | "products" | "admin" | "territory" | "other" | "content" | "usage_entitlement" | "wdc" | "calibration" | "territory2" | "quotes" | "individual";
export type RetrieveStatus = "Pending" | "InProgress" | "Succeeded" | "Failed";
export type RoutingModel = "LEAST_ACTIVE" | "MOST_AVAILABLE" | "EXTERNAL_ROUTING";
export type RoutingType = "Unanimous" | "FirstResponse";
export type SamlEncryptionType = "AES_128" | "AES_256" | "Triple_Des";
export type SamlIdentityLocationType = "SubjectNameId" | "Attribute";
export type SamlIdentityType = "Username" | "FederationId" | "UserId";
export type SamlIdpSLOBinding = "RedirectBinding" | "PostBinding";
export type SamlInitiationMethod = "None" | "IdpInitiated" | "SpInitiated";
export type SamlNameIdFormatType = "Unspecified" | "EmailAddress" | "Persistent" | "Transient";
export type SamlSpSLOBinding = "RedirectBinding" | "PostBinding";
export type SamlSubjectType = "Username" | "FederationId" | "UserId" | "SpokeId" | "CustomAttribute" | "PersistentId";
export type SamlType = "SAML1_1" | "SAML2_0";
export type SControlContentSource = "HTML" | "URL" | "Snippet";
export type SendAction = "Send";
export type SensitiveDataActionType = "Remove" | "Replace";
export type SessionSecurityLevel = "LOW" | "STANDARD" | "HIGH_ASSURANCE";
export type SessionTimeout = "TwentyFourHours" | "TwelveHours" | "EightHours" | "FourHours" | "TwoHours" | "SixtyMinutes" | "ThirtyMinutes" | "FifteenMinutes";
export type SetupObjectVisibility = "PackageProtected" | "Protected" | "Public";
export type SharingModel = "Private" | "Read" | "ReadSelect" | "ReadWrite" | "ReadWriteTransfer" | "FullAccess" | "ControlledByParent" | "ControlledByLeadOrContact" | "ControlledByCampaign";
export type SiteClickjackProtectionLevel = "AllowAllFraming" | "External" | "SameOriginOnly" | "NoFraming";
export type SiteRedirect = "Permanent" | "Temporary";
export type SiteType = "Siteforce" | "Visualforce" | "User";
export type SortOrder = "Asc" | "Desc";
export type StartsWith = "Consonant" | "Vowel" | "Special";
export type StaticResourceCacheControl = "Private" | "Public";
export type StatusCode = "ALL_OR_NONE_OPERATION_ROLLED_BACK" | "ALREADY_IN_PROCESS" | "APEX_DATA_ACCESS_RESTRICTION" | "ASSIGNEE_TYPE_REQUIRED" | "AURA_COMPILE_ERROR" | "AUTH_PROVIDER_NEEDS_AUTH" | "AUTH_PROVIDER_NOT_FOUND" | "BAD_CUSTOM_ENTITY_PARENT_DOMAIN" | "BCC_NOT_ALLOWED_IF_BCC_COMPLIANCE_ENABLED" | "CANNOT_CASCADE_PRODUCT_ACTIVE" | "CANNOT_CHANGE_FIELD_TYPE_OF_APEX_REFERENCED_FIELD" | "CANNOT_CHANGE_FIELD_TYPE_OF_REFERENCED_FIELD" | "CANNOT_CREATE_ANOTHER_MANAGED_PACKAGE" | "CANNOT_DEACTIVATE_DIVISION" | "CANNOT_DELETE_GLOBAL_ACTION_LIST" | "CANNOT_DELETE_LAST_DATED_CONVERSION_RATE" | "CANNOT_DELETE_MANAGED_OBJECT" | "CANNOT_DISABLE_LAST_ADMIN" | "CANNOT_ENABLE_IP_RESTRICT_REQUESTS" | "CANNOT_EXECUTE_FLOW_TRIGGER" | "CANNOT_FREEZE_SELF" | "CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY" | "CANNOT_MODIFY_MANAGED_OBJECT" | "CANNOT_PASSWORD_LOCKOUT" | "CANNOT_POST_TO_ARCHIVED_GROUP" | "CANNOT_RENAME_APEX_REFERENCED_FIELD" | "CANNOT_RENAME_APEX_REFERENCED_OBJECT" | "CANNOT_RENAME_REFERENCED_FIELD" | "CANNOT_RENAME_REFERENCED_OBJECT" | "CANNOT_REPARENT_RECORD" | "CANNOT_UPDATE_CONVERTED_LEAD" | "CANT_DISABLE_CORP_CURRENCY" | "CANT_UNSET_CORP_CURRENCY" | "CHILD_SHARE_FAILS_PARENT" | "CIRCULAR_DEPENDENCY" | "CLEAN_SERVICE_ERROR" | "CLONE_FIELD_INTEGRITY_EXCEPTION" | "CLONE_NOT_SUPPORTED" | "COLLISION_DETECTED" | "COMMERCIAL_CONTROL_ERROR" | "COMMUNITY_NOT_ACCESSIBLE" | "CONFLICTING_ENVIRONMENT_HUB_MEMBER" | "CONFLICTING_SSO_USER_MAPPING" | "CUSTOM_APEX_ERROR" | "CUSTOM_CLOB_FIELD_LIMIT_EXCEEDED" | "CUSTOM_ENTITY_OR_FIELD_LIMIT" | "CUSTOM_FIELD_INDEX_LIMIT_EXCEEDED" | "CUSTOM_INDEX_EXISTS" | "CUSTOM_LINK_LIMIT_EXCEEDED" | "CUSTOM_METADATA_LIMIT_EXCEEDED" | "CUSTOM_METADATA_REL_FIELD_MANAGEABILITY" | "CUSTOM_SETTINGS_LIMIT_EXCEEDED" | "CUSTOM_TAB_LIMIT_EXCEEDED" | "DATAASSESSMENT_CONFIG_ASSESSMENT_IN_PROGRESS_ERROR" | "DATAASSESSMENT_CONFIG_SERVICE_ERROR" | "DATACLOUDADDRESS_NO_RECORDS_FOUND" | "DATACLOUDADDRESS_PROCESSING_ERROR" | "DATACLOUDADDRESS_SERVER_ERROR" | "DELETE_FAILED" | "DELETE_NOT_ALLOWED" | "DELETE_OPERATION_TOO_LARGE" | "DELETE_REQUIRED_ON_CASCADE" | "DEPENDENCY_EXISTS" | "DUPLICATES_DETECTED" | "DUPLICATE_CASE_SOLUTION" | "DUPLICATE_COMM_NICKNAME" | "DUPLICATE_CUSTOM_ENTITY_DEFINITION" | "DUPLICATE_CUSTOM_TAB_MOTIF" | "DUPLICATE_DEVELOPER_NAME" | "DUPLICATE_EXTERNAL_ID" | "DUPLICATE_MASTER_LABEL" | "DUPLICATE_SENDER_DISPLAY_NAME" | "DUPLICATE_USERNAME" | "DUPLICATE_VALUE" | "EMAIL_ADDRESS_BOUNCED" | "EMAIL_EXTERNAL_TRANSPORT_CONNECTION_ERROR" | "EMAIL_EXTERNAL_TRANSPORT_PERMISSION_ERROR" | "EMAIL_EXTERNAL_TRANSPORT_TOKEN_ERROR" | "EMAIL_EXTERNAL_TRANSPORT_TOO_MANY_REQUESTS_ERROR" | "EMAIL_EXTERNAL_TRANSPORT_UNKNOWN_ERROR" | "EMAIL_NOT_PROCESSED_DUE_TO_PRIOR_ERROR" | "EMAIL_OPTED_OUT" | "EMAIL_TEMPLATE_FORMULA_ERROR" | "EMAIL_TEMPLATE_MERGEFIELD_ACCESS_ERROR" | "EMAIL_TEMPLATE_MERGEFIELD_ERROR" | "EMAIL_TEMPLATE_MERGEFIELD_VALUE_ERROR" | "EMAIL_TEMPLATE_PROCESSING_ERROR" | "EMPTY_SCONTROL_FILE_NAME" | "ENHANCED_EMAIL_TEMPLATE_COMPILATION_ERROR" | "ENTITY_FAILED_IFLASTMODIFIED_ON_UPDATE" | "ENTITY_IS_ARCHIVED" | "ENTITY_IS_DELETED" | "ENTITY_IS_LOCKED" | "ENTITY_SAVE_ERROR" | "ENTITY_SAVE_VALIDATION_ERROR" | "ENVIRONMENT_HUB_MEMBERSHIP_CONFLICT" | "ENVIRONMENT_HUB_MEMBERSHIP_ERROR_JOINING_HUB" | "ENVIRONMENT_HUB_MEMBERSHIP_USER_ALREADY_IN_HUB" | "ENVIRONMENT_HUB_MEMBERSHIP_USER_NOT_ORG_ADMIN" | "ERROR_IN_MAILER" | "EXCEEDED_MAX_SEMIJOIN_SUBSELECTS_WRITE" | "EXCHANGE_WEB_SERVICES_URL_INVALID" | "EXTERNAL_RESOURCE_FORBIDDEN" | "FAILED_ACTIVATION" | "FIELD_CUSTOM_VALIDATION_EXCEPTION" | "FIELD_FILTER_VALIDATION_EXCEPTION" | "FIELD_INTEGRITY_EXCEPTION" | "FIELD_KEYWORD_LIST_MATCH_LIMIT" | "FIELD_MAPPING_ERROR" | "FIELD_MODERATION_RULE_BLOCK" | "FIELD_NOT_UPDATABLE" | "FILE_EXTENSION_NOT_ALLOWED" | "FILE_SIZE_LIMIT_EXCEEDED" | "FILTERED_LOOKUP_LIMIT_EXCEEDED" | "FIND_DUPLICATES_ERROR" | "FLOW_EXCEPTION" | "FUNCTIONALITY_NOT_ENABLED" | "HAS_PUBLIC_REFERENCES" | "HTML_FILE_UPLOAD_NOT_ALLOWED" | "IMAGE_TOO_LARGE" | "INACTIVE_OWNER_OR_USER" | "INACTIVE_RULE_ERROR" | "INSERT_UPDATE_DELETE_NOT_ALLOWED_DURING_MAINTENANCE" | "INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY" | "INSUFFICIENT_ACCESS_OR_READONLY" | "INSUFFICIENT_ACCESS_TO_INSIGHTSEXTERNALDATA" | "INSUFFICIENT_CREDITS" | "INTERNAL_ERROR" | "INVALID_ACCESS_LEVEL" | "INVALID_ACCESS_TOKEN" | "INVALID_API_INPUT" | "INVALID_ARGUMENT_TYPE" | "INVALID_ASSIGNEE_TYPE" | "INVALID_ASSIGNMENT_RULE" | "INVALID_AUTH_HEADER" | "INVALID_BATCH_OPERATION" | "INVALID_CONTENT_TYPE" | "INVALID_CREDIT_CARD_INFO" | "INVALID_CROSS_REFERENCE_KEY" | "INVALID_CROSS_REFERENCE_TYPE_FOR_FIELD" | "INVALID_CURRENCY_CONV_RATE" | "INVALID_CURRENCY_CORP_RATE" | "INVALID_CURRENCY_ISO" | "INVALID_DATASET_REFERENCE_INPUT" | "INVALID_DATA_CATEGORY_GROUP_REFERENCE" | "INVALID_DATA_URI" | "INVALID_EMAIL_ADDRESS" | "INVALID_EMPTY_KEY_OWNER" | "INVALID_ENTITY_FOR_MATCH_ENGINE_ERROR" | "INVALID_ENTITY_FOR_MATCH_OPERATION_ERROR" | "INVALID_ENTITY_FOR_UPSERT" | "INVALID_ENVIRONMENT_HUB_MEMBER" | "INVALID_EVENT_DELIVERY" | "INVALID_EVENT_INPUT" | "INVALID_EVENT_SUBSCRIPTION" | "INVALID_EXTENSION_ID" | "INVALID_FIELD" | "INVALID_FIELD_FOR_INSERT_UPDATE" | "INVALID_FIELD_WHEN_USING_TEMPLATE" | "INVALID_FILTER_ACTION" | "INVALID_GOOGLE_DOCS_URL" | "INVALID_ID_FIELD" | "INVALID_INET_ADDRESS" | "INVALID_INPUT" | "INVALID_KEY_FIELD_INPUT" | "INVALID_LINEITEM_CLONE_STATE" | "INVALID_MARKUP" | "INVALID_MASTER_OR_TRANSLATED_SOLUTION" | "INVALID_MESSAGE_ID_REFERENCE" | "INVALID_NAMESPACE_PREFIX" | "INVALID_OAUTH_URL" | "INVALID_OPERATION" | "INVALID_OPERATOR" | "INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST" | "INVALID_OWNER" | "INVALID_PACKAGE_LICENSE" | "INVALID_PACKAGE_VERSION" | "INVALID_PARTNER_NETWORK_STATUS" | "INVALID_PAYLOAD_VERSION" | "INVALID_PERSON_ACCOUNT_OPERATION" | "INVALID_PROVIDER_TYPE" | "INVALID_QUERY_KEY" | "INVALID_QUERY_LOCATOR" | "INVALID_QUERY_VALUE" | "INVALID_READ_ONLY_USER_DML" | "INVALID_REFRESH_TOKEN" | "INVALID_RUNTIME_VALUE" | "INVALID_SAVE_AS_ACTIVITY_FLAG" | "INVALID_SCS_INBOUND_USER" | "INVALID_SESSION_ID" | "INVALID_SETUP_OWNER" | "INVALID_SIGNUP_COUNTRY" | "INVALID_SIGNUP_OPTION" | "INVALID_SITE_DELETE_EXCEPTION" | "INVALID_SITE_FILE_IMPORTED_EXCEPTION" | "INVALID_SITE_FILE_TYPE_EXCEPTION" | "INVALID_STATUS" | "INVALID_SUBDOMAIN" | "INVALID_TEXT_REPRESENTATION" | "INVALID_TYPE" | "INVALID_TYPE_FOR_OPERATION" | "INVALID_TYPE_ON_FIELD_IN_RECORD" | "INVALID_USERID" | "IP_RANGE_LIMIT_EXCEEDED" | "ITEM_NOT_FOUND" | "JIGSAW_IMPORT_LIMIT_EXCEEDED" | "LICENSE_LIMIT_EXCEEDED" | "LIGHT_PORTAL_USER_EXCEPTION" | "LIMIT_EXCEEDED" | "MALFORMED_ID" | "MANAGER_NOT_DEFINED" | "MASSMAIL_RETRY_LIMIT_EXCEEDED" | "MASS_MAIL_LIMIT_EXCEEDED" | "MATCH_DEFINITION_ERROR" | "MATCH_OPERATION_ERROR" | "MATCH_OPERATION_INVALID_ENGINE_ERROR" | "MATCH_OPERATION_INVALID_RULE_ERROR" | "MATCH_OPERATION_MISSING_ENGINE_ERROR" | "MATCH_OPERATION_MISSING_OBJECT_TYPE_ERROR" | "MATCH_OPERATION_MISSING_OPTIONS_ERROR" | "MATCH_OPERATION_MISSING_RULE_ERROR" | "MATCH_OPERATION_UNKNOWN_RULE_ERROR" | "MATCH_OPERATION_UNSUPPORTED_VERSION_ERROR" | "MATCH_PRECONDITION_FAILED" | "MATCH_RUNTIME_ERROR" | "MATCH_SERVICE_ERROR" | "MATCH_SERVICE_TIMED_OUT" | "MATCH_SERVICE_UNAVAILABLE_ERROR" | "MAXIMUM_CCEMAILS_EXCEEDED" | "MAXIMUM_DASHBOARD_COMPONENTS_EXCEEDED" | "MAXIMUM_HIERARCHY_CHILDREN_REACHED" | "MAXIMUM_HIERARCHY_LEVELS_REACHED" | "MAXIMUM_HIERARCHY_TREE_SIZE_REACHED" | "MAXIMUM_SIZE_OF_ATTACHMENT" | "MAXIMUM_SIZE_OF_DOCUMENT" | "MAX_ACTIONS_PER_RULE_EXCEEDED" | "MAX_ACTIVE_RULES_EXCEEDED" | "MAX_APPROVAL_STEPS_EXCEEDED" | "MAX_DEPTH_IN_FLOW_EXECUTION" | "MAX_FORMULAS_PER_RULE_EXCEEDED" | "MAX_LIMIT_EXCEEDED" | "MAX_RULES_EXCEEDED" | "MAX_RULE_ENTRIES_EXCEEDED" | "MAX_TASK_DESCRIPTION_EXCEEEDED" | "MAX_TM_RULES_EXCEEDED" | "MAX_TM_RULE_ITEMS_EXCEEDED" | "MAX_TRIGGERS_EXCEEDED" | "MERGE_FAILED" | "METADATA_FIELD_UPDATE_ERROR" | "MISSING_ARGUMENT" | "MISSING_RECORD" | "MIXED_DML_OPERATION" | "NONUNIQUE_SHIPPING_ADDRESS" | "NO_ACCESS_TOKEN" | "NO_ACCESS_TOKEN_FROM_REFRESH" | "NO_APPLICABLE_PROCESS" | "NO_ATTACHMENT_PERMISSION" | "NO_AUTH_PROVIDER" | "NO_INACTIVE_DIVISION_MEMBERS" | "NO_MASS_MAIL_PERMISSION" | "NO_PARTNER_PERMISSION" | "NO_REFRESH_TOKEN" | "NO_SUCH_USER_EXISTS" | "NO_TOKEN_ENDPOINT" | "NUMBER_OUTSIDE_VALID_RANGE" | "NUM_HISTORY_FIELDS_BY_SOBJECT_EXCEEDED" | "OPERATION_ENQUEUED" | "OPTED_OUT_OF_MASS_MAIL" | "OP_WITH_INVALID_USER_TYPE_EXCEPTION" | "ORCHESTRATION_INVALID" | "PACKAGE_DISABLED" | "PACKAGE_LICENSE_REQUIRED" | "PACKAGING_API_INSTALL_FAILED" | "PACKAGING_API_UNINSTALL_FAILED" | "PALI_INVALID_ACTION_ID" | "PALI_INVALID_ACTION_NAME" | "PALI_INVALID_ACTION_TYPE" | "PAL_INVALID_ASSISTANT_RECOMMENDATION_TYPE_ID" | "PAL_INVALID_ENTITY_ID" | "PAL_INVALID_FLEXIPAGE_ID" | "PAL_INVALID_LAYOUT_ID" | "PAL_INVALID_PARAMETERS" | "PAYLOAD_SIZE_EXCEEDED" | "PA_API_EXCEPTION" | "PA_AXIS_FAULT" | "PA_INVALID_ID_EXCEPTION" | "PA_NO_ACCESS_EXCEPTION" | "PA_NO_DATA_FOUND_EXCEPTION" | "PA_URI_SYNTAX_EXCEPTION" | "PA_VISIBLE_ACTIONS_FILTER_ORDERING_EXCEPTION" | "PLATFORM_EVENT_PUBLISHING_UNAVAILABLE" | "PLATFORM_EVENT_PUBLISH_FAILED" | "PORTAL_NO_ACCESS" | "PORTAL_USER_ALREADY_EXISTS_FOR_CONTACT" | "PORTAL_USER_CREATION_RESTRICTED_WITH_ENCRYPTION" | "PRIVATE_CONTACT_ON_ASSET" | "PROCESSING_HALTED" | "QA_INVALID_CREATE_FEED_ITEM" | "QA_INVALID_SUCCESS_MESSAGE" | "QUERY_TIMEOUT" | "QUICK_ACTION_LIST_ITEM_NOT_ALLOWED" | "QUICK_ACTION_LIST_NOT_ALLOWED" | "RECORD_IN_USE_BY_WORKFLOW" | "RELATED_ENTITY_FILTER_VALIDATION_EXCEPTION" | "REL_FIELD_BAD_ACCESSIBILITY" | "REPUTATION_MINIMUM_NUMBER_NOT_REACHED" | "REQUEST_RUNNING_TOO_LONG" | "REQUIRED_FEATURE_MISSING" | "REQUIRED_FIELD_MISSING" | "REQUIRE_CONNECTED_APP_SCS" | "REQUIRE_CONNECTED_APP_SESSION_SCS" | "REQUIRE_RUNAS_USER" | "RETRIEVE_EXCHANGE_ATTACHMENT_FAILED" | "RETRIEVE_EXCHANGE_EMAIL_FAILED" | "RETRIEVE_EXCHANGE_EVENT_FAILED" | "RETRIEVE_GOOGLE_EMAIL_FAILED" | "RETRIEVE_GOOGLE_EVENT_FAILED" | "RETRIEVE_USER_CONFIG_ERROR" | "SALESFORCE_INBOX_TRANSPORT_CONNECTION_ERROR" | "SALESFORCE_INBOX_TRANSPORT_INVALID_INPUT_ERROR" | "SALESFORCE_INBOX_TRANSPORT_TOKEN_ERROR" | "SALESFORCE_INBOX_TRANSPORT_UNKNOWN_ERROR" | "SELF_REFERENCE_FROM_FLOW" | "SELF_REFERENCE_FROM_TRIGGER" | "SHARE_NEEDED_FOR_CHILD_OWNER" | "SINGLE_EMAIL_LIMIT_EXCEEDED" | "SOCIAL_ACCOUNT_NOT_FOUND" | "SOCIAL_ACTION_INVALID" | "SOCIAL_PERSONA_NOT_FOUND" | "SOCIAL_POST_INVALID" | "SOCIAL_POST_NOT_FOUND" | "STANDARD_PRICE_NOT_DEFINED" | "STORAGE_LIMIT_EXCEEDED" | "STRING_TOO_LONG" | "SUBDOMAIN_IN_USE" | "TABSET_LIMIT_EXCEEDED" | "TEMPLATE_NOT_ACTIVE" | "TEMPLATE_NOT_FOUND" | "TERMS_OF_SERVICE_UNREAD" | "TERRITORY_REALIGN_IN_PROGRESS" | "TEXT_DATA_OUTSIDE_SUPPORTED_CHARSET" | "TOO_MANY_APEX_REQUESTS" | "TOO_MANY_ENUM_VALUE" | "TOO_MANY_JOBS" | "TOO_MANY_POSSIBLE_USERS_EXIST" | "TRANSFER_REQUIRES_READ" | "UNABLE_TO_LOCK_ROW" | "UNAVAILABLE_RECORDTYPE_EXCEPTION" | "UNAVAILABLE_REF" | "UNDELETE_FAILED" | "UNKNOWN_EXCEPTION" | "UNKNOWN_TOKEN_ERROR" | "UNSAFE_HTML_CONTENT" | "UNSPECIFIED_EMAIL_ADDRESS" | "UNSUPPORTED_APEX_TRIGGER_OPERATON" | "UNSUPPORTED_SOCIAL_PROVIDER" | "UNVERIFIED_SENDER_ADDRESS" | "UPDATE_GOOGLE_EMAIL_LABEL_FAILED" | "USER_OWNS_PORTAL_ACCOUNT_EXCEPTION" | "USER_WITH_APEX_SHARES_EXCEPTION" | "VF_COMPILE_ERROR" | "WEBLINK_SIZE_LIMIT_EXCEEDED" | "WEBLINK_URL_INVALID" | "WRONG_CONTROLLER_TYPE" | "XCLEAN_DJ_MATCH_IGNORABLE_ERROR" | "XCLEAN_DJ_MATCH_INTERNAL_DJ_ERROR" | "XCLEAN_DJ_MATCH_NON_RETRIABLE_ERROR" | "XCLEAN_DJ_MATCH_RETRIABLE_ERROR" | "XCLEAN_DJ_MATCH_UNKNOWN_ERROR" | "XCLEAN_UNEXPECTED_ERROR";
export type StepCriteriaNotMetType = "ApproveRecord" | "RejectRecord" | "GotoNextStep";
export type StepRejectBehaviorType = "RejectRequest" | "BackToPrevious";
export type StrategyReactionType = "Accepted" | "Rejected";
export type SummaryLayoutStyle = "Default" | "QuoteTemplate" | "DefaultQuoteTemplate" | "ServiceReportTemplate" | "ChildServiceReportTemplateStyle" | "DefaultServiceReportTemplate" | "CaseInteraction" | "QuickActionLayoutLeftRight" | "QuickActionLayoutTopDown" | "PathAssistant";
export type SummaryOperations = "count" | "sum" | "min" | "max";
export type SupervisorAgentStatusFilter = "Online" | "Away" | "Offline";
export type TabVisibility = "Hidden" | "DefaultOff" | "DefaultOn";
export type Template = "Page" | "Tab" | "Toc";
export type TestLevel = "NoTestRun" | "RunSpecifiedTests" | "RunLocalTests" | "RunAllTestsInOrg";
export type TimeSheetFrequency = "Daily" | "Weekly" | "EveryTwoWeeks" | "TwiceAMonth" | "Monthly";
export type TransactionSecurityEventName = "ReportEvent" | "ApiEvent" | "AdminSetupEvent" | "LoginEvent" | "ListViewEvent";
export type TreatBlanksAs = "BlankAsBlank" | "BlankAsZero";
export type TxnSecurityPolicyType = "CustomApexPolicy" | "CustomConditionBuilderPolicy";
export type UiBehavior = "Edit" | "Required" | "Readonly";
export type UiType = "Aloha" | "Lightning";
export type UserDateGranularity = "None" | "Day" | "Week" | "Month" | "Quarter" | "Year" | "FiscalQuarter" | "FiscalYear" | "MonthInYear" | "DayInMonth" | "FiscalPeriod" | "FiscalWeek";
export type UserDateInterval = "INTERVAL_CURRENT" | "INTERVAL_CURNEXT1" | "INTERVAL_CURPREV1" | "INTERVAL_NEXT1" | "INTERVAL_PREV1" | "INTERVAL_CURNEXT3" | "INTERVAL_CURFY" | "INTERVAL_PREVFY" | "INTERVAL_PREV2FY" | "INTERVAL_AGO2FY" | "INTERVAL_NEXTFY" | "INTERVAL_PREVCURFY" | "INTERVAL_PREVCUR2FY" | "INTERVAL_CURNEXTFY" | "INTERVAL_CUSTOM" | "INTERVAL_YESTERDAY" | "INTERVAL_TODAY" | "INTERVAL_TOMORROW" | "INTERVAL_LASTWEEK" | "INTERVAL_THISWEEK" | "INTERVAL_NEXTWEEK" | "INTERVAL_LASTMONTH" | "INTERVAL_THISMONTH" | "INTERVAL_NEXTMONTH" | "INTERVAL_LASTTHISMONTH" | "INTERVAL_THISNEXTMONTH" | "INTERVAL_CURRENTQ" | "INTERVAL_CURNEXTQ" | "INTERVAL_CURPREVQ" | "INTERVAL_NEXTQ" | "INTERVAL_PREVQ" | "INTERVAL_CURNEXT3Q" | "INTERVAL_CURY" | "INTERVAL_PREVY" | "INTERVAL_PREV2Y" | "INTERVAL_AGO2Y" | "INTERVAL_NEXTY" | "INTERVAL_PREVCURY" | "INTERVAL_PREVCUR2Y" | "INTERVAL_CURNEXTY" | "INTERVAL_LAST7" | "INTERVAL_LAST30" | "INTERVAL_LAST60" | "INTERVAL_LAST90" | "INTERVAL_LAST120" | "INTERVAL_NEXT7" | "INTERVAL_NEXT30" | "INTERVAL_NEXT60" | "INTERVAL_NEXT90" | "INTERVAL_NEXT120" | "LAST_FISCALWEEK" | "THIS_FISCALWEEK" | "NEXT_FISCALWEEK" | "LAST_FISCALPERIOD" | "THIS_FISCALPERIOD" | "NEXT_FISCALPERIOD" | "LASTTHIS_FISCALPERIOD" | "THISNEXT_FISCALPERIOD" | "CURRENT_ENTITLEMENT_PERIOD" | "PREVIOUS_ENTITLEMENT_PERIOD" | "PREVIOUS_TWO_ENTITLEMENT_PERIODS" | "TWO_ENTITLEMENT_PERIODS_AGO" | "CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD" | "CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS";
export type VisibleOrRequired = "VisibleOptional" | "VisibleRequired" | "NotVisible";
export type WebLinkAvailability = "online" | "offline";
export type WebLinkDisplayType = "link" | "button" | "massActionButton";
export type WebLinkPosition = "fullScreen" | "none" | "topLeft";
export type WebLinkType = "url" | "sControl" | "javascript" | "page" | "flow";
export type WebLinkWindowType = "newWindow" | "sidebar" | "noSidebar" | "replace" | "onClickJavaScript";
export type WorkflowActionType = "FieldUpdate" | "KnowledgePublish" | "Task" | "Alert" | "Send" | "OutboundMessage" | "FlowAction";
export type WorkflowTimeUnits = "Hours" | "Days";
export type WorkflowTriggerTypes = "onCreateOnly" | "onCreateOrTriggeringUpdate" | "onAllChanges" | "OnRecursiveUpdate";

export interface AllOrNoneHeader {
    allOrNone?: boolean[];
}

export interface CallOptions {
    client?: string[];
}

export interface DebuggingHeader {
    categories?: LogInfo[];
    debugLevel?: LogType[];
}

export interface DebuggingInfo {
    debugLog?: string[];
}

export interface SessionHeader {
    sessionId?: string[];
}

export interface CancelDeploy {
    String?: ID[];
}

export interface CancelDeployResponse {
    result?: CancelDeployResult[];
}

export interface CheckDeployStatus {
    asyncProcessId?: ID[];
    includeDetails?: boolean[];
}

export interface CheckDeployStatusResponse {
    result?: DeployResult[];
}

export interface CheckRetrieveStatus {
    asyncProcessId?: ID[];
    includeZip?: boolean[];
}

export interface CheckRetrieveStatusResponse {
    result?: RetrieveResult[];
}

export interface CreateMetadata {
    metadata?: Metadata[];
}

export interface CreateMetadataResponse {
    result?: SaveResult[];
}

export interface DeleteMetadata {
    type?: string[];
    fullNames?: string[];
}

export interface DeleteMetadataResponse {
    result?: DeleteResult[];
}

export interface Deploy {
    ZipFile?: any[];
    DeployOptions?: DeployOptions[];
}

export interface DeployResponse {
    result?: AsyncResult[];
}

export interface DeployRecentValidation {
    validationId?: ID[];
}

export interface DeployRecentValidationResponse {
    result?: string[];
}

export interface DescribeMetadata {
    asOfVersion?: number[];
}

export interface DescribeMetadataResponse {
    result?: DescribeMetadataResult[];
}

export interface DescribeValueType {
    type?: string[];
}

export interface DescribeValueTypeResponse {
    result?: DescribeValueTypeResult[];
}

export interface ListMetadata {
    queries?: ListMetadataQuery[];
    asOfVersion?: number[];
}

export interface ListMetadataResponse {
    result?: FileProperties[];
}

export interface ReadMetadata {
    type?: string[];
    fullNames?: string[];
}

export interface ReadMetadataResponse {
    result?: ReadResult[];
}

export interface RenameMetadata {
    type?: string[];
    oldFullName?: string[];
    newFullName?: string[];
}

export interface RenameMetadataResponse {
    result?: SaveResult[];
}

export interface Retrieve {
    retrieveRequest?: RetrieveRequest[];
}

export interface RetrieveResponse {
    result?: AsyncResult[];
}

export interface UpdateMetadata {
    metadata?: Metadata[];
}

export interface UpdateMetadataResponse {
    result?: SaveResult[];
}

export interface UpsertMetadata {
    metadata?: Metadata[];
}

export interface UpsertMetadataResponse {
    result?: UpsertResult[];
}

export interface AccessControlPolicy extends MetadataWithContent {
    active?: boolean[];
    deploymentStatus?: ACPStatus[];
    description?: string[];
    masterLabel?: string[];
    targetEntity?: string[];
    version?: number[];
}

export interface AccessMapping {
    accessLevel?: string[];
    object?: string[];
    objectField?: string[];
    userField?: string[];
}

export interface AccountRelationshipShareRule extends Metadata {
    accessLevel?: string[];
    accountToCriteriaField?: string[];
    description?: string[];
    entityType?: string[];
    masterLabel?: string[];
    staticFormulaCriteria?: string[];
    type?: string[];
}

export interface AccountSettings extends Metadata {
    enableAccountHistoryTracking?: boolean[];
    enableAccountInsightsInMobile?: boolean[];
    enableAccountOwnerReport?: boolean[];
    enableAccountTeams?: boolean[];
    enableContactHistoryTracking?: boolean[];
    enableRelateContactToMultipleAccounts?: boolean[];
    showViewHierarchyLink?: boolean[];
}

export interface AccountSharingRuleSettings {
    caseAccessLevel?: string[];
    contactAccessLevel?: string[];
    opportunityAccessLevel?: string[];
}

export interface ActionLinkGroupTemplate extends Metadata {
    actionLinkTemplates?: ActionLinkTemplate[];
    category?: PlatformActionGroupCategory[];
    executionsAllowed?: ActionLinkExecutionsAllowed[];
    hoursUntilExpiration?: number[];
    isPublished?: boolean[];
    name?: string[];
}

export interface ActionLinkTemplate {
    actionUrl?: string[];
    headers?: string[];
    isConfirmationRequired?: boolean[];
    isGroupDefault?: boolean[];
    label?: string[];
    labelKey?: string[];
    linkType?: ActionLinkType[];
    method?: ActionLinkHttpMethod[];
    position?: number[];
    requestBody?: string[];
    userAlias?: string[];
    userVisibility?: ActionLinkUserVisibility[];
}

export interface ActionOverride {
    actionName?: string[];
    comment?: string[];
    content?: string[];
    formFactor?: FormFactor[];
    skipRecordTypeSelect?: boolean[];
    type?: ActionOverrideType[];
}

export interface ActionPlanTemplate extends Metadata {
    actionPlanTemplateItem?: ActionPlanTemplateItem[];
    description?: string[];
    name?: string[];
    targetEntityType?: string[];
    uniqueName?: string[];
}

export interface ActionPlanTemplateItem {
    actionPlanTemplateItemValue?: ActionPlanTemplateItemValue[];
    displayOrder?: number[];
    isRequired?: boolean[];
    name?: string[];
    uniqueName?: string[];
}

export interface ActionPlanTemplateItemValue {
    name?: string[];
    valueFormula?: string[];
    valueLiteral?: string[];
}

export interface ActionsSettings extends Metadata {
    enableDefaultQuickActionsOn?: boolean[];
    enableMdpEnabled?: boolean[];
    enableThirdPartyActions?: boolean[];
}

export interface ActivitiesSettings extends Metadata {
    allowUsersToRelateMultipleContactsToTasksAndEvents?: boolean[];
    autoRelateEventAttendees?: boolean[];
    enableActivityReminders?: boolean[];
    enableClickCreateEvents?: boolean[];
    enableDragAndDropScheduling?: boolean[];
    enableEmailTracking?: boolean[];
    enableGroupTasks?: boolean[];
    enableListViewScheduling?: boolean[];
    enableLogNote?: boolean[];
    enableMultidayEvents?: boolean[];
    enableRecurringEvents?: boolean[];
    enableRecurringTasks?: boolean[];
    enableRollUpActivToContactsAcct?: boolean[];
    enableSidebarCalendarShortcut?: boolean[];
    enableSimpleTaskCreateUI?: boolean[];
    enableUNSTaskDelegatedToNotifications?: boolean[];
    enableUserListViewCalendars?: boolean[];
    meetingRequestsLogo?: string[];
    showCustomLogoMeetingRequests?: boolean[];
    showEventDetailsMultiUserCalendar?: boolean[];
    showHomePageHoverLinksForEvents?: boolean[];
    showMyTasksHoverLinks?: boolean[];
}

export interface AddressSettings extends Metadata {
    countriesAndStates?: CountriesAndStates[];
}

export interface AdjustmentsSettings {
    enableAdjustments?: boolean[];
    enableOwnerAdjustments?: boolean[];
}

export interface AgentConfigAssignments {
    profiles?: AgentConfigProfileAssignments[];
    users?: AgentConfigUserAssignments[];
}

export interface AgentConfigButtons {
    button?: string[];
}

export interface AgentConfigProfileAssignments {
    profile?: string[];
}

export interface AgentConfigSkills {
    skill?: string[];
}

export interface AgentConfigUserAssignments {
    user?: string[];
}

export interface AnalyticsCloudComponentLayoutItem {
    assetType?: string[];
    devName?: string[];
    error?: string[];
    filter?: string[];
    height?: number[];
    hideOnError?: boolean[];
    showHeader?: boolean[];
    showSharing?: boolean[];
    showTitle?: boolean[];
    width?: string[];
}

export interface AnalyticSnapshot extends Metadata {
    description?: string[];
    groupColumn?: string[];
    mappings?: AnalyticSnapshotMapping[];
    name?: string[];
    runningUser?: string[];
    sourceReport?: string[];
    targetObject?: string[];
}

export interface AnalyticSnapshotMapping {
    aggregateType?: ReportSummaryType[];
    sourceField?: string[];
    sourceType?: ReportJobSourceTypes[];
    targetField?: string[];
}

export interface AnalyticsSettings extends Metadata {
    alwaysGenPreviews?: boolean[];
    analyticsAdoptionMetadata?: boolean[];
    canAccessAnalyticsViaAPI?: boolean[];
    canAnnotateDashboards?: boolean[];
    canEnableSavedView?: boolean[];
    canExploreDataConversationally?: boolean[];
    canShareAppsWithCommunities?: boolean[];
    canSubscribeDashboardWidgets?: boolean[];
    canViewThumbnailAssets?: boolean[];
    enableAnalyticsSubtotals?: boolean[];
    enableAutoCompleteCombo?: boolean[];
    enableDashboardComponentSnapshot?: boolean[];
    enableDashboardFlexiTable?: boolean[];
    enableEmailReportsToPortalUsers?: boolean[];
    enableFloatingReportHeaders?: boolean[];
    enableInsights?: boolean[];
    enableLightningReportBuilder?: boolean[];
    enableLotusNotesImages?: boolean[];
    enableMassEnableReportBuilder?: boolean[];
    enableNewChartsEngine?: boolean[];
    enablePowerInsights?: boolean[];
    enableRemoveFooterForRepDisplay?: boolean[];
    enableRemoveFooterFromRepExp?: boolean[];
    enableReportFieldToFieldPref?: boolean[];
    enableReportUniqueRowCountPref?: boolean[];
    enableSFXJoinedReportsEnable?: boolean[];
    enableSmartDataDiscovery?: boolean[];
    enableUseOldChartsLookAndFeel?: boolean[];
    enableWaveReplication?: boolean[];
    enableWaveSharingInheritance?: boolean[];
    enableWaveTemplate?: boolean[];
    enableWaveTrendedDatasetCleanup?: boolean[];
}

export interface AnimationRule extends Metadata {
    animationFrequency?: string[];
    developerName?: string[];
    isActive?: boolean[];
    masterLabel?: string[];
    recordTypeContext?: string[];
    recordTypeName?: string[];
    sobjectType?: string[];
    targetField?: string[];
    targetFieldChangeToValues?: string[];
}

export interface ApexClass extends MetadataWithContent {
    apiVersion?: number[];
    packageVersions?: PackageVersion[];
    status?: ApexCodeUnitStatus[];
}

export interface ApexComponent extends MetadataWithContent {
    apiVersion?: number[];
    description?: string[];
    label?: string[];
    packageVersions?: PackageVersion[];
}

export interface ApexPage extends MetadataWithContent {
    apiVersion?: number[];
    availableInTouch?: boolean[];
    confirmationTokenRequired?: boolean[];
    description?: string[];
    label?: string[];
    packageVersions?: PackageVersion[];
}

export interface ApexSettings extends Metadata {
    enableAggregateCodeCoverageOnly?: boolean[];
    enableApexAccessRightsPref?: boolean[];
    enableApexApprovalLockUnlock?: boolean[];
    enableApexCtrlImplicitWithSharingPref?: boolean[];
    enableApexPropertyGetterPref?: boolean[];
    enableAuraApexCtrlAuthUserAccessCheckPref?: boolean[];
    enableAuraApexCtrlGuestUserAccessCheckPref?: boolean[];
    enableCompileOnDeploy?: boolean[];
    enableDisableParallelApexTesting?: boolean[];
    enableDoNotEmailDebugLog?: boolean[];
    enableGaplessTestAutoNum?: boolean[];
    enableMngdCtrlActionAccessPref?: boolean[];
    enableNonCertifiedApexMdCrud?: boolean[];
}

export interface ApexTestSuite extends Metadata {
    testClassName?: string[];
}

export interface ApexTrigger extends MetadataWithContent {
    apiVersion?: number[];
    packageVersions?: PackageVersion[];
    status?: ApexCodeUnitStatus[];
}

export interface AppActionOverride extends ActionOverride {
    pageOrSobjectType?: string[];
}

export interface AppBrand {
    footerColor?: string[];
    headerColor?: string[];
    logo?: string[];
    logoVersion?: number[];
    shouldOverrideOrgTheme?: boolean[];
}

export interface AppComponentList {
    alignment?: string[];
    components?: string[];
}

export interface AppExperienceSettings extends Metadata {
    doesHideAllAppsInAppLauncher?: boolean[];
}

export interface AppMenu extends Metadata {
    appMenuItems?: AppMenuItem[];
}

export interface AppMenuItem {
    name?: string[];
    type?: string[];
}

export interface AppointmentSchedulingPolicy extends Metadata {
    appointmentStartTimeInterval?: string[];
    masterLabel?: string[];
    shouldConsiderCalendarEvents?: boolean[];
    shouldEnforceExcludedResource?: boolean[];
    shouldEnforceRequiredResource?: boolean[];
    shouldMatchSkill?: boolean[];
    shouldMatchSkillLevel?: boolean[];
    shouldRespectVisitingHours?: boolean[];
    shouldUsePrimaryMembers?: boolean[];
    shouldUseSecondaryMembers?: boolean[];
}

export interface AppPreferences {
    enableCustomizeMyTabs?: boolean[];
    enableKeyboardShortcuts?: boolean[];
    enableListViewHover?: boolean[];
    enableListViewReskin?: boolean[];
    enableMultiMonitorComponents?: boolean[];
    enablePinTabs?: boolean[];
    enableTabHover?: boolean[];
    enableTabLimits?: boolean[];
    saveUserSessions?: boolean[];
}

export interface AppProfileActionOverride extends ProfileActionOverride {
    profile?: string[];
}

export interface ApprovalAction {
    action?: WorkflowActionReference[];
}

export interface ApprovalEntryCriteria {
    booleanFilter?: string[];
    criteriaItems?: FilterItem[];
    formula?: string[];
}

export interface ApprovalPageField {
    field?: string[];
}

export interface ApprovalProcess extends Metadata {
    active?: boolean[];
    allowRecall?: boolean[];
    allowedSubmitters?: ApprovalSubmitter[];
    approvalPageFields?: ApprovalPageField[];
    approvalStep?: ApprovalStep[];
    description?: string[];
    emailTemplate?: string[];
    enableMobileDeviceAccess?: boolean[];
    entryCriteria?: ApprovalEntryCriteria[];
    finalApprovalActions?: ApprovalAction[];
    finalApprovalRecordLock?: boolean[];
    finalRejectionActions?: ApprovalAction[];
    finalRejectionRecordLock?: boolean[];
    initialSubmissionActions?: ApprovalAction[];
    label?: string[];
    nextAutomatedApprover?: NextAutomatedApprover[];
    postTemplate?: string[];
    recallActions?: ApprovalAction[];
    recordEditability?: RecordEditabilityType[];
    showApprovalHistory?: boolean[];
}

export interface ApprovalStep {
    allowDelegate?: boolean[];
    approvalActions?: ApprovalAction[];
    assignedApprover?: ApprovalStepApprover[];
    description?: string[];
    entryCriteria?: ApprovalEntryCriteria[];
    ifCriteriaNotMet?: StepCriteriaNotMetType[];
    label?: string[];
    name?: string[];
    rejectBehavior?: ApprovalStepRejectBehavior[];
    rejectionActions?: ApprovalAction[];
}

export interface ApprovalStepApprover {
    approver?: Approver[];
    whenMultipleApprovers?: RoutingType[];
}

export interface ApprovalStepRejectBehavior {
    type?: StepRejectBehaviorType[];
}

export interface ApprovalSubmitter {
    submitter?: string[];
    type?: ProcessSubmitterType[];
}

export interface Approver {
    name?: string[];
    type?: NextOwnerType[];
}

export interface AppWorkspaceConfig {
    mappings?: WorkspaceMapping[];
}

export interface ArchiveSettings extends Metadata {
    enableEntityArchivingEnabled?: boolean[];
}

export interface ArticleTypeChannelDisplay {
    articleTypeTemplates?: ArticleTypeTemplate[];
}

export interface ArticleTypeTemplate {
    channel?: Channel[];
    page?: string[];
    template?: Template[];
}

export interface AssignmentRule extends Metadata {
    active?: boolean[];
    ruleEntry?: RuleEntry[];
}

export interface AssignmentRules extends Metadata {
    assignmentRule?: AssignmentRule[];
}

export interface AsyncResult {
    done?: boolean[];
    id?: ID[];
    message?: string[];
    state?: AsyncRequestState[];
    statusCode?: StatusCode[];
}

export interface Attachment {
    content?: any[];
    name?: string[];
}

export interface Audience extends Metadata {
    audienceName?: string[];
    container?: string[];
    criteria?: AudienceCriteria[];
    description?: string[];
    formula?: string[];
    formulaFilterType?: FormulaFilterType[];
    targets?: PersonalizationTargetInfos[];
}

export interface AudienceCriteria {
    criterion?: AudienceCriterion[];
}

export interface AudienceCriteriaValue {
    city?: string[];
    country?: string[];
    domain?: string[];
    entityField?: string[];
    entityType?: string[];
    fieldValue?: string[];
    isEnabled?: string[];
    permissionName?: string[];
    permissionType?: string[];
    profile?: string[];
    subdivision?: string[];
}

export interface AudienceCriterion {
    criteriaNumber?: number[];
    criterionValue?: AudienceCriteriaValue[];
    operator?: AudienceCriterionOperator[];
    type?: AudienceCriterionType[];
}

export interface AuraDefinitionBundle extends Metadata {
    SVGContent?: any[];
    apiVersion?: number[];
    controllerContent?: any[];
    description?: string[];
    designContent?: any[];
    documentationContent?: any[];
    helperContent?: any[];
    markup?: any[];
    modelContent?: any[];
    packageVersions?: PackageVersion[];
    rendererContent?: any[];
    styleContent?: any[];
    testsuiteContent?: any[];
    type?: AuraBundleType[];
}

export interface AuthProvider extends Metadata {
    appleTeam?: string[];
    authorizeUrl?: string[];
    consumerKey?: string[];
    consumerSecret?: string[];
    customMetadataTypeRecord?: string[];
    defaultScopes?: string[];
    ecKey?: string[];
    errorUrl?: string[];
    executionUser?: string[];
    friendlyName?: string[];
    iconUrl?: string[];
    idTokenIssuer?: string[];
    includeOrgIdInIdentifier?: boolean[];
    linkKickoffUrl?: string[];
    logoutUrl?: string[];
    oauthKickoffUrl?: string[];
    plugin?: string[];
    portal?: string[];
    providerType?: AuthProviderType[];
    registrationHandler?: string[];
    sendAccessTokenInHeader?: boolean[];
    sendClientCredentialsInHeader?: boolean[];
    sendSecretInApis?: boolean[];
    ssoKickoffUrl?: string[];
    tokenUrl?: string[];
    userInfoUrl?: string[];
}

export interface AutoResponseRule extends Metadata {
    active?: boolean[];
    ruleEntry?: RuleEntry[];
}

export interface AutoResponseRules extends Metadata {
    autoResponseRule?: AutoResponseRule[];
}

export interface BlockchainSettings extends Metadata {
    enableBcp?: boolean[];
    enableBcpCoin?: boolean[];
}

export interface Bot extends Metadata {
    botMlDomain?: LocalMlDomain[];
    botUser?: string[];
    botVersions?: BotVersion[];
    contextVariables?: ConversationContextVariable[];
    description?: string[];
    label?: string[];
}

export interface BotDialog {
    botDialogGroup?: string[];
    botSteps?: BotStep[];
    description?: string[];
    developerName?: string[];
    label?: string[];
    mlIntent?: string[];
    mlIntentTrainingEnabled?: boolean[];
    showInFooterMenu?: boolean[];
}

export interface BotDialogGroup {
    description?: string[];
    developerName?: string[];
    label?: string[];
}

export interface BotInvocation {
    invocationActionName?: string[];
    invocationActionType?: ConversationInvocableTargetType[];
    invocationMappings?: BotInvocationMapping[];
}

export interface BotInvocationMapping {
    parameterName?: string[];
    type?: BotInvocationMappingType[];
    value?: string[];
    variableName?: string[];
    variableType?: ConversationVariableType[];
}

export interface BotMessage {
    message?: string[];
}

export interface BotNavigation {
    botNavigationLinks?: BotNavigationLink[];
    type?: BotNavigationType[];
}

export interface BotNavigationLink {
    label?: string[];
    targetBotDialog?: string[];
}

export interface BotQuickReplyOption {
    literalValue?: string[];
}

export interface BotSettings extends Metadata {
    enableBots?: boolean[];
}

export interface BotStep {
    booleanFilter?: string[];
    botInvocation?: BotInvocation[];
    botMessages?: BotMessage[];
    botNavigation?: BotNavigation[];
    botStepConditions?: BotStepCondition[];
    botSteps?: BotStep[];
    botVariableOperation?: BotVariableOperation[];
    conversationRecordLookup?: ConversationRecordLookup[];
    conversationSystemMessage?: ConversationSystemMessage[];
    type?: BotStepType[];
}

export interface BotStepCondition {
    leftOperandName?: string[];
    leftOperandType?: ConversationVariableType[];
    operatorType?: BotStepConditionOperatorType[];
    rightOperandValue?: string[];
}

export interface BotVariableOperand {
    disableAutoFill?: boolean[];
    sourceName?: string[];
    sourceType?: ConversationVariableOperandSourceType[];
    sourceValue?: string[];
    targetName?: string[];
    targetType?: ConversationVariableType[];
}

export interface BotVariableOperation {
    botInvocation?: BotInvocation[];
    botMessages?: BotMessage[];
    botQuickReplyOptions?: BotQuickReplyOption[];
    botVariableOperands?: BotVariableOperand[];
    invalidInputBotNavigation?: BotNavigation[];
    quickReplyOptionTemplate?: string[];
    quickReplyType?: BotQuickReplyType[];
    quickReplyWidgetType?: BotWidgetType[];
    sourceVariableName?: string[];
    sourceVariableType?: ConversationVariableType[];
    type?: BotVariableOperationType[];
}

export interface BotVersion extends Metadata {
    botDialogGroups?: BotDialogGroup[];
    botDialogs?: BotDialog[];
    conversationVariables?: ConversationVariable[];
    entryDialog?: string[];
    mainMenuDialog?: string[];
    responseDelayMilliseconds?: number[];
}

export interface BrandingSet extends Metadata {
    brandingSetProperty?: BrandingSetProperty[];
    description?: string[];
    masterLabel?: string[];
    type?: string[];
}

export interface BrandingSetProperty {
    propertyName?: string[];
    propertyValue?: string[];
}

export interface BusinessHoursEntry extends Metadata {
    active?: boolean[];
    default?: boolean[];
    fridayEndTime?: number[];
    fridayStartTime?: number[];
    mondayEndTime?: number[];
    mondayStartTime?: number[];
    name?: string[];
    saturdayEndTime?: number[];
    saturdayStartTime?: number[];
    sundayEndTime?: number[];
    sundayStartTime?: number[];
    thursdayEndTime?: number[];
    thursdayStartTime?: number[];
    timeZoneId?: string[];
    tuesdayEndTime?: number[];
    tuesdayStartTime?: number[];
    wednesdayEndTime?: number[];
    wednesdayStartTime?: number[];
}

export interface BusinessHoursSettings extends Metadata {
    businessHours?: BusinessHoursEntry[];
    holidays?: Holiday[];
}

export interface BusinessProcess extends Metadata {
    description?: string[];
    isActive?: boolean[];
    values?: PicklistValue[];
}

export interface CallCenter extends Metadata {
    adapterUrl?: string[];
    customSettings?: string[];
    displayName?: string[];
    displayNameLabel?: string[];
    internalNameLabel?: string[];
    sections?: CallCenterSection[];
    version?: string[];
}

export interface CallCenterItem {
    label?: string[];
    name?: string[];
    value?: string[];
}

export interface CallCenterSection {
    items?: CallCenterItem[];
    label?: string[];
    name?: string[];
}

export interface CampaignInfluenceModel extends Metadata {
    isActive?: boolean[];
    isDefaultModel?: boolean[];
    isModelLocked?: boolean[];
    modelDescription?: string[];
    name?: string[];
    recordPreference?: string[];
}

export interface CampaignSettings extends Metadata {
    enableAutoCampInfluenceDisabled?: boolean[];
    enableB2bmaCampaignInfluence2?: boolean[];
    enableCampaignHistoryTrackEnabled?: boolean[];
    enableCampaignInfluence2?: boolean[];
    enableCampaignMemberTWCF?: boolean[];
    enableSuppressNoValueCI2?: boolean[];
}

export interface CancelDeployResult {
    done?: boolean[];
    id?: ID[];
}

export interface CanvasMetadata extends Metadata {
    accessMethod?: string[];
    canvasOptions?: string[];
    canvasUrl?: string[];
    lifecycleClass?: string[];
    locationOptions?: string[];
    samlInitiationMethod?: string[];
}

export interface CaseClassificationSettings extends Metadata {
    caseClassificationRecommendations?: boolean[];
    reRunAttributeBasedRules?: boolean[];
    runAssignmentRules?: boolean[];
}

export interface CaseSettings extends Metadata {
    caseAssignNotificationTemplate?: string[];
    caseAutoProcUser?: boolean[];
    caseCloseNotificationTemplate?: string[];
    caseCommentNotificationTemplate?: string[];
    caseCreateNotificationTemplate?: string[];
    caseFeedItemSettings?: FeedItemSettings[];
    caseFeedReadUnreadLtng?: boolean[];
    caseMergeInLightning?: boolean[];
    closeCaseThroughStatusChange?: boolean[];
    defaultCaseFeedLayoutOn?: boolean[];
    defaultCaseOwner?: string[];
    defaultCaseOwnerType?: string[];
    defaultCaseUser?: string[];
    emailActionDefaultsHandlerClass?: string[];
    emailToCase?: EmailToCaseSettings[];
    enableCaseFeed?: boolean[];
    enableCollapseEmailThread?: boolean[];
    enableDraftEmails?: boolean[];
    enableEarlyEscalationRuleTriggers?: boolean[];
    enableEmailActionDefaultsHandler?: boolean[];
    enableSuggestedArticlesApplication?: boolean[];
    enableSuggestedArticlesCustomerPortal?: boolean[];
    enableSuggestedArticlesPartnerPortal?: boolean[];
    enableSuggestedSolutions?: boolean[];
    escalateCaseBefore?: boolean[];
    genericMessageEnabled?: boolean[];
    keepRecordTypeOnAssignmentRule?: boolean[];
    notifyContactOnCaseComment?: boolean[];
    notifyDefaultCaseOwner?: boolean[];
    notifyOwnerOnCaseComment?: boolean[];
    notifyOwnerOnCaseOwnerChange?: boolean[];
    predictiveSupportEnabled?: boolean[];
    showEmailAttachmentsInCaseAttachmentsRL?: boolean[];
    showFewerCloseActions?: boolean[];
    systemUserEmail?: string[];
    useSystemEmailAddress?: boolean[];
    useSystemUserAsDefaultCaseUser?: boolean[];
    webToCase?: WebToCaseSettings[];
}

export interface CaseSubjectParticle extends Metadata {
    index?: number[];
    textField?: string[];
    type?: CaseSubjectParticleType[];
}

export interface Certificate extends MetadataWithContent {
    caSigned?: boolean[];
    encryptedWithPlatformEncryption?: boolean[];
    expirationDate?: string[];
    keySize?: number[];
    masterLabel?: string[];
    privateKeyExportable?: boolean[];
}

export interface ChannelLayout extends Metadata {
    enabledChannels?: string[];
    label?: string[];
    layoutItems?: ChannelLayoutItem[];
    recordType?: string[];
}

export interface ChannelLayoutItem {
    field?: string[];
}

export interface ChartSummary {
    aggregate?: ReportSummaryType[];
    axisBinding?: ChartAxis[];
    column?: string[];
}

export interface ChatterAnswersReputationLevel {
    name?: string[];
    value?: number[];
}

export interface ChatterAnswersSettings extends Metadata {
    emailFollowersOnBestAnswer?: boolean[];
    emailFollowersOnReply?: boolean[];
    emailOwnerOnPrivateReply?: boolean[];
    emailOwnerOnReply?: boolean[];
    enableAnswerViaEmail?: boolean[];
    enableChatterAnswers?: boolean[];
    enableFacebookSSO?: boolean[];
    enableInlinePublisher?: boolean[];
    enableReputation?: boolean[];
    enableRichTextEditor?: boolean[];
    facebookAuthProvider?: string[];
    showInPortals?: boolean[];
}

export interface ChatterEmailsMDSettings extends Metadata {
    enableChatterDigestEmailsApiOnly?: boolean[];
    enableChatterEmailAttachment?: boolean[];
    enableCollaborationEmail?: boolean[];
    enableDisplayAppDownloadBadges?: boolean[];
    enableEmailReplyToChatter?: boolean[];
    enableEmailToChatter?: boolean[];
}

export interface ChatterExtension extends Metadata {
    compositionComponent?: string[];
    description?: string[];
    extensionName?: string[];
    headerText?: string[];
    hoverText?: string[];
    icon?: string[];
    isProtected?: boolean[];
    masterLabel?: string[];
    renderComponent?: string[];
    type?: ChatterExtensionType[];
}

export interface ChatterSettings extends Metadata {
    allowChatterGroupArchiving?: boolean[];
    allowRecordsInChatterGroup?: boolean[];
    allowSharingInChatterGroup?: boolean[];
    enableApprovalRequest?: boolean[];
    enableChatter?: boolean[];
    enableChatterEmoticons?: boolean[];
    enableFeedEdit?: boolean[];
    enableFeedPinning?: boolean[];
    enableFeedsDraftPosts?: boolean[];
    enableFeedsRichText?: boolean[];
    enableInviteCsnUsers?: boolean[];
    enableOutOfOfficeEnabledPref?: boolean[];
    enableRichLinkPreviewsInFeed?: boolean[];
    enableTodayRecsInFeed?: boolean[];
    unlistedGroupsEnabled?: boolean[];
}

export interface CleanDataService extends Metadata {
    cleanRules?: CleanRule[];
    description?: string[];
    masterLabel?: string[];
    matchEngine?: string[];
}

export interface CleanRule {
    bulkEnabled?: boolean[];
    bypassTriggers?: boolean[];
    bypassWorkflow?: boolean[];
    description?: string[];
    developerName?: string[];
    fieldMappings?: FieldMapping[];
    masterLabel?: string[];
    matchRule?: string[];
    sourceSobjectType?: string[];
    status?: CleanRuleStatus[];
    targetSobjectType?: string[];
}

export interface CMSConnectAsset {
    assetPath?: string[];
    assetType?: string[];
    sortOrder?: number[];
}

export interface CMSConnectLanguage {
    cmsLanguage?: string[];
    language?: string[];
}

export interface CMSConnectPersonalization {
    connectorPage?: string[];
    connectorPageAsset?: string[];
}

export interface CMSConnectResourceDefinition {
    developerName?: string[];
    masterLabel?: string[];
    options?: number[];
    payloadType?: string[];
    resourceIdPath?: string[];
    resourceNamePath?: string[];
    resourcePath?: string[];
    rootNodePath?: string[];
}

export interface CMSConnectResourceType {
    cmsConnectResourceDefinition?: CMSConnectResourceDefinition[];
    developerName?: string[];
    masterLabel?: string[];
    resourceType?: string[];
}

export interface CMSConnectSource extends Metadata {
    cmsConnectAsset?: CMSConnectAsset[];
    cmsConnectLanguage?: CMSConnectLanguage[];
    cmsConnectPersonalization?: CMSConnectPersonalization[];
    cmsConnectResourceType?: CMSConnectResourceType[];
    connectionType?: CMSSourceConnectionType[];
    cssScope?: string[];
    developerName?: string[];
    languageEnabled?: string[];
    masterLabel?: string[];
    namedCredential?: string[];
    personalizationEnabled?: string[];
    rootPath?: string[];
    sortOrder?: number[];
    status?: CMSConnectionStatus[];
    type?: CMSConnectionSourceType[];
    websiteUrl?: string[];
}

export interface CodeCoverageResult {
    dmlInfo?: CodeLocation[];
    id?: ID[];
    locationsNotCovered?: CodeLocation[];
    methodInfo?: CodeLocation[];
    name?: string[];
    namespace?: string[];
    numLocations?: number[];
    numLocationsNotCovered?: number[];
    soqlInfo?: CodeLocation[];
    soslInfo?: CodeLocation[];
    type?: string[];
}

export interface CodeCoverageWarning {
    id?: ID[];
    message?: string[];
    name?: string[];
    namespace?: string[];
}

export interface CodeLocation {
    column?: number[];
    line?: number[];
    numExecutions?: number[];
    time?: number[];
}

export interface CommandAction extends Metadata {
    actionType?: string[];
    description?: string[];
    intents?: CommandActionIntent[];
    label?: string[];
    parameters?: CommandActionParam[];
    responseTemplates?: CommandActionResponse[];
    target?: string[];
}

export interface CommandActionIntent {
    phrase?: string[];
    responseTemplates?: CommandActionResponse[];
}

export interface CommandActionParam {
    defaultValue?: string[];
    description?: string[];
    name?: string[];
    required?: boolean[];
    type?: string[];
}

export interface CommandActionResponse {
    template?: string[];
}

export interface CommunitiesSettings extends Metadata {
    canModerateAllFeedPosts?: boolean[];
    canModerateInternalFeedPosts?: boolean[];
    embeddedVisualforcePages?: boolean[];
    enableCommunityWorkspaces?: boolean[];
    enableCspContactVisibilityPref?: boolean[];
    enableCspNotesOnAccConPref?: boolean[];
    enableEnablePRM?: boolean[];
    enableExternalAccHierPref?: boolean[];
    enableGuestRecordReassignOrgPref?: boolean[];
    enableInviteChatterGuestEnabled?: boolean[];
    enableNetPortalUserReportOpts?: boolean[];
    enableNetworksEnabled?: boolean[];
    enableOotbProfExtUserOpsEnable?: boolean[];
    enablePRMAccRelPref?: boolean[];
    enablePowerCustomerCaseStatus?: boolean[];
    enableRelaxPartnerAccountFieldPref?: boolean[];
    enableUsernameUniqForOrgPref?: boolean[];
}

export interface Community extends Metadata {
    active?: boolean[];
    chatterAnswersFacebookSsoUrl?: string[];
    communityFeedPage?: string[];
    dataCategoryName?: string[];
    description?: string[];
    emailFooterDocument?: string[];
    emailHeaderDocument?: string[];
    emailNotificationUrl?: string[];
    enableChatterAnswers?: boolean[];
    enablePrivateQuestions?: boolean[];
    expertsGroup?: string[];
    portal?: string[];
    reputationLevels?: ReputationLevels[];
    showInPortal?: boolean[];
    site?: string[];
}

export interface CommunityCustomThemeLayoutType {
    description?: string[];
    label?: string[];
}

export interface CommunityRoles {
    customerUserRole?: string[];
    employeeUserRole?: string[];
    partnerUserRole?: string[];
}

export interface CommunityTemplateBundleInfo {
    description?: string[];
    image?: string[];
    order?: number[];
    title?: string[];
    type?: CommunityTemplateBundleInfoType[];
}

export interface CommunityTemplateDefinition extends Metadata {
    baseTemplate?: CommunityBaseTemplate[];
    bundlesInfo?: CommunityTemplateBundleInfo[];
    category?: CommunityTemplateCategory[];
    defaultBrandingSet?: string[];
    defaultThemeDefinition?: string[];
    description?: string[];
    enableExtendedCleanUpOnDelete?: boolean[];
    masterLabel?: string[];
    navigationLinkSet?: NavigationLinkSet[];
    pageSetting?: CommunityTemplatePageSetting[];
    publisher?: string[];
}

export interface CommunityTemplatePageSetting {
    page?: string[];
    themeLayout?: string[];
}

export interface CommunityThemeBundleInfo extends CommunityTemplateBundleInfo {
}

export interface CommunityThemeDefinition extends Metadata {
    bundlesInfo?: CommunityThemeBundleInfo[];
    customThemeLayoutType?: CommunityCustomThemeLayoutType[];
    defaultBrandingSet?: string[];
    description?: string[];
    enableExtendedCleanUpOnDelete?: boolean[];
    masterLabel?: string[];
    publisher?: string[];
    themeRouteOverride?: CommunityThemeRouteOverride[];
    themeSetting?: CommunityThemeSetting[];
}

export interface CommunityThemeRouteOverride {
    customThemeLayoutType?: string[];
    pageAttributes?: string[];
    pageType?: string[];
    themeLayoutType?: CommunityThemeLayoutType[];
}

export interface CommunityThemeSetting {
    customThemeLayoutType?: string[];
    themeLayout?: string[];
    themeLayoutType?: CommunityThemeLayoutType[];
}

export interface CompactLayout extends Metadata {
    fields?: string[];
    label?: string[];
}

export interface CompanySettings extends Metadata {
    enableCustomFiscalYear?: boolean[];
    fiscalYear?: FiscalYearSettings[];
}

export interface ComponentInstance {
    componentInstanceProperties?: ComponentInstanceProperty[];
    componentName?: string[];
    visibilityRule?: UiFormulaRule[];
}

export interface ComponentInstanceProperty {
    name?: string[];
    type?: ComponentInstancePropertyTypeEnum[];
    value?: string[];
}

export interface ConnectedApp extends Metadata {
    attributes?: ConnectedAppAttribute[];
    canvas?: CanvasMetadata[];
    canvasConfig?: ConnectedAppCanvasConfig[];
    contactEmail?: string[];
    contactPhone?: string[];
    description?: string[];
    iconUrl?: string[];
    infoUrl?: string[];
    ipRanges?: ConnectedAppIpRange[];
    label?: string[];
    logoUrl?: string[];
    mobileAppConfig?: ConnectedAppMobileDetailConfig[];
    mobileStartUrl?: string[];
    oauthConfig?: ConnectedAppOauthConfig[];
    permissionSetName?: string[];
    plugin?: string[];
    pluginExecutionUser?: string[];
    profileName?: string[];
    samlConfig?: ConnectedAppSamlConfig[];
    startUrl?: string[];
}

export interface ConnectedAppAttribute {
    formula?: string[];
    key?: string[];
}

export interface ConnectedAppCanvasConfig {
    accessMethod?: AccessMethod[];
    canvasUrl?: string[];
    lifecycleClass?: string[];
    locations?: CanvasLocationOptions[];
    options?: CanvasOptions[];
    samlInitiationMethod?: SamlInitiationMethod[];
}

export interface ConnectedAppIpRange {
    description?: string[];
    end?: string[];
    start?: string[];
}

export interface ConnectedAppMobileDetailConfig {
    applicationBinaryFile?: any[];
    applicationBinaryFileName?: string[];
    applicationBundleIdentifier?: string[];
    applicationFileLength?: number[];
    applicationIconFile?: string[];
    applicationIconFileName?: string[];
    applicationInstallUrl?: string[];
    devicePlatform?: DevicePlatformType[];
    deviceType?: DeviceType[];
    minimumOsVersion?: string[];
    privateApp?: boolean[];
    version?: string[];
}

export interface ConnectedAppOauthConfig {
    callbackUrl?: string[];
    certificate?: string[];
    consumerKey?: string[];
    consumerSecret?: string[];
    idTokenConfig?: ConnectedAppOauthIdToken[];
    isAdminApproved?: boolean[];
    scopes?: ConnectedAppOauthAccessScope[];
    singleLogoutUrl?: string[];
}

export interface ConnectedAppOauthIdToken {
    idTokenAudience?: string[];
    idTokenIncludeAttributes?: boolean[];
    idTokenIncludeCustomPerms?: boolean[];
    idTokenIncludeStandardClaims?: boolean[];
    idTokenValidity?: number[];
}

export interface ConnectedAppSamlConfig {
    acsUrl?: string[];
    certificate?: string[];
    encryptionCertificate?: string[];
    encryptionType?: SamlEncryptionType[];
    entityUrl?: string[];
    issuer?: string[];
    samlIdpSLOBindingEnum?: SamlIdpSLOBinding[];
    samlNameIdFormat?: SamlNameIdFormatType[];
    samlSloUrl?: string[];
    samlSubjectCustomAttr?: string[];
    samlSubjectType?: SamlSubjectType[];
}

export interface ConnectedAppSettings extends Metadata {
    enableAdminApprovedAppsOnly?: boolean[];
    enableSkipUserProvisioningWizardWelcomePage?: boolean[];
}

export interface Container {
    height?: number[];
    isContainerAutoSizeEnabled?: boolean[];
    region?: string[];
    sidebarComponents?: SidebarComponent[];
    style?: string[];
    unit?: string[];
    width?: number[];
}

export interface ContentAsset extends MetadataWithContent {
    format?: ContentAssetFormat[];
    isVisibleByExternalUsers?: boolean[];
    language?: string[];
    masterLabel?: string[];
    originNetwork?: string[];
    relationships?: ContentAssetRelationships[];
    versions?: ContentAssetVersions[];
}

export interface ContentAssetLink {
    access?: ContentAssetAccess[];
    isManagingWorkspace?: boolean[];
    name?: string[];
}

export interface ContentAssetRelationships {
    insightsApplication?: ContentAssetLink[];
    network?: ContentAssetLink[];
    organization?: ContentAssetLink[];
    workspace?: ContentAssetLink[];
}

export interface ContentAssetVersion {
    number?: string[];
    pathOnClient?: string[];
    zipEntry?: string[];
}

export interface ContentAssetVersions {
    version?: ContentAssetVersion[];
}

export interface ContentSettings extends Metadata {
    enableChatterFileLink?: boolean[];
    enableContent?: boolean[];
    enableContentAutoAssign?: boolean[];
    enableContentDistForPortalUsers?: boolean[];
    enableContentDistPwOptionsBit1?: boolean[];
    enableContentDistPwOptionsBit2?: boolean[];
    enableContentDistribution?: boolean[];
    enableContentSupportMultiLanguage?: boolean[];
    enableContentWorkspaceAccess?: boolean[];
    enableFileShareSetByRecord?: boolean[];
    enableFilesUsrShareNetRestricted?: boolean[];
    enableJPGPreviews?: boolean[];
    enableLibraryManagedFiles?: boolean[];
    enableSiteGuestUserToUploadFiles?: boolean[];
    enableUploadFilesOnAttachments?: boolean[];
    skipContentAssetTriggers?: boolean[];
    skipContentAssetTriggersOnDeploy?: boolean[];
}

export interface ContractSettings extends Metadata {
    autoCalculateEndDate?: boolean[];
    autoExpirationDelay?: string[];
    autoExpirationRecipient?: string[];
    autoExpireContracts?: boolean[];
    enableContractHistoryTracking?: boolean[];
    notifyOwnersOnContractExpiration?: boolean[];
}

export interface ConversationContextVariable {
    SObjectType?: string[];
    contextVariableMappings?: ConversationContextVariableMapping[];
    dataType?: ConversationDataType[];
    developerName?: string[];
    label?: string[];
}

export interface ConversationContextVariableMapping {
    SObjectType?: string[];
    fieldName?: string[];
    messageType?: MessageType[];
}

export interface ConversationRecordLookup {
    SObjectType?: string[];
    lookupFields?: ConversationRecordLookupField[];
    maxLookupResults?: number[];
    sourceVariableName?: string[];
    sourceVariableType?: ConversationVariableType[];
    targetVariableName?: string[];
}

export interface ConversationRecordLookupField {
    fieldName?: string[];
}

export interface ConversationSystemMessage {
    systemMessageMappings?: ConversationSystemMessageMapping[];
    type?: ConversationSystemMessageType[];
}

export interface ConversationSystemMessageMapping {
    mappingType?: ConversationMappingType[];
    parameterType?: ConversationSystemMessageParamType[];
    variableName?: string[];
}

export interface ConversationVariable {
    SObjectType?: string[];
    collectionType?: ConversationVariableCollectionType[];
    dataType?: ConversationDataType[];
    developerName?: string[];
    label?: string[];
}

export interface CorsWhitelistOrigin extends Metadata {
    urlPattern?: string[];
}

export interface CountriesAndStates {
    countries?: Country[];
}

export interface Country {
    active?: boolean[];
    integrationValue?: string[];
    isoCode?: string[];
    label?: string[];
    orgDefault?: boolean[];
    standard?: boolean[];
    states?: State[];
    visible?: boolean[];
}

export interface CspTrustedSite extends Metadata {
    context?: CspTrustedSiteContext[];
    description?: string[];
    endpointUrl?: string[];
    isActive?: boolean[];
}

export interface CurrencySettings extends Metadata {
    enableCurrencyEffectiveDates?: boolean[];
    enableCurrencySymbolWithMultiCurrency?: boolean[];
    enableMultiCurrency?: boolean[];
    isMultiCurrencyActivationAllowed?: boolean[];
    isParenCurrencyConvDisabled?: boolean[];
}

export interface CustomApplication extends Metadata {
    actionOverrides?: AppActionOverride[];
    brand?: AppBrand[];
    consoleConfig?: ServiceCloudConsoleConfig[];
    defaultLandingTab?: string[];
    description?: string[];
    formFactors?: FormFactor[];
    isNavAutoTempTabsDisabled?: boolean[];
    isNavPersonalizationDisabled?: boolean[];
    isServiceCloudConsole?: boolean[];
    label?: string[];
    logo?: string[];
    navType?: NavType[];
    preferences?: AppPreferences[];
    profileActionOverrides?: AppProfileActionOverride[];
    setupExperience?: string[];
    subscriberTabs?: string[];
    tabs?: string[];
    uiType?: UiType[];
    utilityBar?: string[];
    workspaceConfig?: AppWorkspaceConfig[];
}

export interface CustomApplicationComponent extends Metadata {
    buttonIconUrl?: string[];
    buttonStyle?: string[];
    buttonText?: string[];
    buttonWidth?: number[];
    height?: number[];
    isHeightFixed?: boolean[];
    isHidden?: boolean[];
    isWidthFixed?: boolean[];
    visualforcePage?: string[];
    width?: number[];
}

export interface CustomApplicationTranslation {
    label?: string[];
    name?: string[];
}

export interface CustomConsoleComponents {
    primaryTabComponents?: PrimaryTabComponents[];
    subtabComponents?: SubtabComponents[];
}

export interface CustomDataTypeComponentTranslation {
    developerSuffix?: string[];
    label?: string[];
}

export interface CustomDataTypeTranslation {
    components?: CustomDataTypeComponentTranslation[];
    customDataTypeName?: string[];
    description?: string[];
    label?: string[];
}

export interface CustomFeedFilter extends Metadata {
    criteria?: FeedFilterCriterion[];
    description?: string[];
    isProtected?: boolean[];
    label?: string[];
}

export interface CustomField extends Metadata {
    businessOwnerGroup?: string[];
    businessOwnerUser?: string[];
    businessStatus?: string[];
    caseSensitive?: boolean[];
    complianceGroup?: string[];
    customDataType?: string[];
    defaultValue?: string[];
    deleteConstraint?: DeleteConstraint[];
    deprecated?: boolean[];
    description?: string[];
    displayFormat?: string[];
    encryptionScheme?: EncryptionScheme[];
    escapeMarkup?: boolean[];
    externalDeveloperName?: string[];
    externalId?: boolean[];
    fieldManageability?: FieldManageability[];
    formula?: string[];
    formulaTreatBlanksAs?: TreatBlanksAs[];
    inlineHelpText?: string[];
    isAIPredictionField?: boolean[];
    isConvertLeadDisabled?: boolean[];
    isFilteringDisabled?: boolean[];
    isNameField?: boolean[];
    isSortingDisabled?: boolean[];
    label?: string[];
    length?: number[];
    lookupFilter?: LookupFilter[];
    maskChar?: EncryptedFieldMaskChar[];
    maskType?: EncryptedFieldMaskType[];
    metadataRelationshipControllingField?: string[];
    populateExistingRows?: boolean[];
    precision?: number[];
    referenceTargetField?: string[];
    referenceTo?: string[];
    relationshipLabel?: string[];
    relationshipName?: string[];
    relationshipOrder?: number[];
    reparentableMasterDetail?: boolean[];
    required?: boolean[];
    restrictedAdminField?: boolean[];
    scale?: number[];
    securityClassification?: string[];
    startingNumber?: number[];
    stripMarkup?: boolean[];
    summarizedField?: string[];
    summaryFilterItems?: FilterItem[];
    summaryForeignKey?: string[];
    summaryOperation?: SummaryOperations[];
    trackFeedHistory?: boolean[];
    trackHistory?: boolean[];
    trackTrending?: boolean[];
    translateData?: boolean[];
    type?: FieldType[];
    unique?: boolean[];
    valueSet?: ValueSet[];
    visibleLines?: number[];
    writeRequiresMasterRead?: boolean[];
}

export interface CustomFieldTranslation {
    caseValues?: ObjectNameCaseValue[];
    gender?: Gender[];
    help?: string[];
    label?: string[];
    lookupFilter?: LookupFilterTranslation[];
    name?: string[];
    picklistValues?: PicklistValueTranslation[];
    relationshipLabel?: string[];
    startsWith?: StartsWith[];
}

export interface CustomHelpMenuItem {
    linkUrl?: string[];
    masterLabel?: string[];
    sortOrder?: number[];
}

export interface CustomHelpMenuSection extends Metadata {
    customHelpMenuItems?: CustomHelpMenuItem[];
    masterLabel?: string[];
}

export interface CustomHttpHeader {
    description?: string[];
    headerFieldName?: string[];
    headerFieldValue?: string[];
    isActive?: boolean[];
}

export interface CustomLabel extends Metadata {
    categories?: string[];
    language?: string[];
    protected?: boolean[];
    shortDescription?: string[];
    value?: string[];
}

export interface CustomLabels extends Metadata {
    labels?: CustomLabel[];
}

export interface CustomLabelTranslation {
    label?: string[];
    name?: string[];
}

export interface CustomMetadata extends Metadata {
    description?: string[];
    label?: string[];
    protected?: boolean[];
    values?: CustomMetadataValue[];
}

export interface CustomMetadataValue {
    field?: string[];
    value?: any[];
}

export interface CustomNotificationType extends Metadata {
    customNotifTypeName?: string[];
    description?: string[];
    desktop?: boolean[];
    masterLabel?: string[];
    mobile?: boolean[];
}

export interface CustomObject extends Metadata {
    actionOverrides?: ActionOverride[];
    allowInChatterGroups?: boolean[];
    articleTypeChannelDisplay?: ArticleTypeChannelDisplay[];
    businessProcesses?: BusinessProcess[];
    compactLayoutAssignment?: string[];
    compactLayouts?: CompactLayout[];
    customHelp?: string[];
    customHelpPage?: string[];
    customSettingsType?: CustomSettingsType[];
    deploymentStatus?: DeploymentStatus[];
    deprecated?: boolean[];
    description?: string[];
    enableActivities?: boolean[];
    enableBulkApi?: boolean[];
    enableDataTranslation?: boolean[];
    enableDivisions?: boolean[];
    enableEnhancedLookup?: boolean[];
    enableFeeds?: boolean[];
    enableHistory?: boolean[];
    enableLicensing?: boolean[];
    enableReports?: boolean[];
    enableSearch?: boolean[];
    enableSharing?: boolean[];
    enableStreamingApi?: boolean[];
    eventType?: PlatformEventType[];
    externalDataSource?: string[];
    externalName?: string[];
    externalRepository?: string[];
    externalSharingModel?: SharingModel[];
    fieldSets?: FieldSet[];
    fields?: CustomField[];
    gender?: Gender[];
    historyRetentionPolicy?: HistoryRetentionPolicy[];
    household?: boolean[];
    indexes?: Index[];
    label?: string[];
    listViews?: ListView[];
    nameField?: CustomField[];
    pluralLabel?: string[];
    profileSearchLayouts?: ProfileSearchLayouts[];
    publishBehavior?: PlatformEventPublishBehavior[];
    recordTypeTrackFeedHistory?: boolean[];
    recordTypeTrackHistory?: boolean[];
    recordTypes?: RecordType[];
    searchLayouts?: SearchLayouts[];
    sharingModel?: SharingModel[];
    sharingReasons?: SharingReason[];
    sharingRecalculations?: SharingRecalculation[];
    startsWith?: StartsWith[];
    validationRules?: ValidationRule[];
    visibility?: SetupObjectVisibility[];
    webLinks?: WebLink[];
}

export interface CustomObjectTranslation extends Metadata {
    caseValues?: ObjectNameCaseValue[];
    fieldSets?: FieldSetTranslation[];
    fields?: CustomFieldTranslation[];
    gender?: Gender[];
    layouts?: LayoutTranslation[];
    nameFieldLabel?: string[];
    quickActions?: QuickActionTranslation[];
    recordTypes?: RecordTypeTranslation[];
    sharingReasons?: SharingReasonTranslation[];
    standardFields?: StandardFieldTranslation[];
    startsWith?: StartsWith[];
    validationRules?: ValidationRuleTranslation[];
    webLinks?: WebLinkTranslation[];
    workflowTasks?: WorkflowTaskTranslation[];
}

export interface CustomPageWebLink extends Metadata {
    availability?: WebLinkAvailability[];
    description?: string[];
    displayType?: WebLinkDisplayType[];
    encodingKey?: Encoding[];
    hasMenubar?: boolean[];
    hasScrollbars?: boolean[];
    hasToolbar?: boolean[];
    height?: number[];
    isResizable?: boolean[];
    linkType?: WebLinkType[];
    masterLabel?: string[];
    openType?: WebLinkWindowType[];
    page?: string[];
    position?: WebLinkPosition[];
    protected?: boolean[];
    requireRowSelection?: boolean[];
    scontrol?: string[];
    showsLocation?: boolean[];
    showsStatus?: boolean[];
    url?: string[];
    width?: number[];
}

export interface CustomPageWebLinkTranslation {
    label?: string[];
    name?: string[];
}

export interface CustomPermission extends Metadata {
    connectedApp?: string[];
    description?: string[];
    label?: string[];
    requiredPermission?: CustomPermissionDependencyRequired[];
}

export interface CustomPermissionDependencyRequired {
    customPermission?: string[];
    dependency?: boolean[];
}

export interface CustomShortcut extends DefaultShortcut {
    description?: string[];
    eventName?: string[];
}

export interface CustomSite extends Metadata {
    active?: boolean[];
    allowHomePage?: boolean[];
    allowStandardAnswersPages?: boolean[];
    allowStandardIdeasPages?: boolean[];
    allowStandardLookups?: boolean[];
    allowStandardPortalPages?: boolean[];
    allowStandardSearch?: boolean[];
    analyticsTrackingCode?: string[];
    authorizationRequiredPage?: string[];
    bandwidthExceededPage?: string[];
    browserXssProtection?: boolean[];
    changePasswordPage?: string[];
    chatterAnswersForgotPasswordConfirmPage?: string[];
    chatterAnswersForgotPasswordPage?: string[];
    chatterAnswersHelpPage?: string[];
    chatterAnswersLoginPage?: string[];
    chatterAnswersRegistrationPage?: string[];
    clickjackProtectionLevel?: SiteClickjackProtectionLevel[];
    contentSniffingProtection?: boolean[];
    cspUpgradeInsecureRequests?: boolean[];
    customWebAddresses?: SiteWebAddress[];
    description?: string[];
    enableAuraRequests?: boolean[];
    favoriteIcon?: string[];
    fileNotFoundPage?: string[];
    forgotPasswordPage?: string[];
    genericErrorPage?: string[];
    guestProfile?: string[];
    inMaintenancePage?: string[];
    inactiveIndexPage?: string[];
    indexPage?: string[];
    masterLabel?: string[];
    myProfilePage?: string[];
    portal?: string[];
    referrerPolicyOriginWhenCrossOrigin?: boolean[];
    requireHttps?: boolean[];
    requireInsecurePortalAccess?: boolean[];
    robotsTxtPage?: string[];
    rootComponent?: string[];
    selfRegPage?: string[];
    serverIsDown?: string[];
    siteAdmin?: string[];
    siteRedirectMappings?: SiteRedirectMapping[];
    siteTemplate?: string[];
    siteType?: SiteType[];
    subdomain?: string[];
    urlPathPrefix?: string[];
}

export interface CustomTab extends Metadata {
    actionOverrides?: ActionOverride[];
    auraComponent?: string[];
    customObject?: boolean[];
    description?: string[];
    flexiPage?: string[];
    frameHeight?: number[];
    hasSidebar?: boolean[];
    icon?: string[];
    label?: string[];
    lwcComponent?: string[];
    motif?: string[];
    page?: string[];
    scontrol?: string[];
    splashPageLink?: string[];
    url?: string[];
    urlEncodingKey?: Encoding[];
}

export interface CustomTabTranslation {
    label?: string[];
    name?: string[];
}

export interface CustomValue extends Metadata {
    color?: string[];
    default?: boolean[];
    description?: string[];
    isActive?: boolean[];
    label?: string[];
}

export interface Dashboard extends Metadata {
    backgroundEndColor?: string[];
    backgroundFadeDirection?: ChartBackgroundDirection[];
    backgroundStartColor?: string[];
    chartTheme?: ChartTheme[];
    colorPalette?: ChartColorPalettes[];
    dashboardChartTheme?: ChartTheme[];
    dashboardColorPalette?: ChartColorPalettes[];
    dashboardFilters?: DashboardFilter[];
    dashboardGridLayout?: DashboardGridLayout[];
    dashboardResultRefreshedDate?: string[];
    dashboardResultRunningUser?: string[];
    dashboardType?: DashboardType[];
    description?: string[];
    folderName?: string[];
    isGridLayout?: boolean[];
    leftSection?: DashboardComponentSection[];
    middleSection?: DashboardComponentSection[];
    numSubscriptions?: number[];
    rightSection?: DashboardComponentSection[];
    runningUser?: string[];
    textColor?: string[];
    title?: string[];
    titleColor?: string[];
    titleSize?: number[];
}

export interface DashboardComponent {
    autoselectColumnsFromReport?: boolean[];
    chartAxisRange?: ChartRangeType[];
    chartAxisRangeMax?: number[];
    chartAxisRangeMin?: number[];
    chartSummary?: ChartSummary[];
    componentChartTheme?: ChartTheme[];
    componentType?: DashboardComponentType[];
    dashboardFilterColumns?: DashboardFilterColumn[];
    dashboardTableColumn?: DashboardTableColumn[];
    decimalPrecision?: number[];
    displayUnits?: ChartUnits[];
    drillDownUrl?: string[];
    drillEnabled?: boolean[];
    drillToDetailEnabled?: boolean[];
    enableHover?: boolean[];
    expandOthers?: boolean[];
    flexComponentProperties?: DashboardFlexTableComponentProperties[];
    footer?: string[];
    gaugeMax?: number[];
    gaugeMin?: number[];
    groupingColumn?: string[];
    groupingSortProperties?: DashboardComponentGroupingSortProperties[];
    header?: string[];
    indicatorBreakpoint1?: number[];
    indicatorBreakpoint2?: number[];
    indicatorHighColor?: string[];
    indicatorLowColor?: string[];
    indicatorMiddleColor?: string[];
    legendPosition?: ChartLegendPosition[];
    maxValuesDisplayed?: number[];
    metricLabel?: string[];
    page?: string[];
    pageHeightInPixels?: number[];
    report?: string[];
    scontrol?: string[];
    scontrolHeightInPixels?: number[];
    showPercentage?: boolean[];
    showPicturesOnCharts?: boolean[];
    showPicturesOnTables?: boolean[];
    showRange?: boolean[];
    showTotal?: boolean[];
    showValues?: boolean[];
    sortBy?: DashboardComponentFilter[];
    title?: string[];
    useReportChart?: boolean[];
}

export interface DashboardComponentColumn {
    breakPoint1?: number[];
    breakPoint2?: number[];
    breakPointOrder?: number[];
    highRangeColor?: number[];
    lowRangeColor?: number[];
    midRangeColor?: number[];
    reportColumn?: string[];
    showSubTotal?: boolean[];
    showTotal?: boolean[];
    type?: DashboardComponentColumnType[];
}

export interface DashboardComponentGroupingSort {
    groupingLevel?: string[];
    inheritedReportGroupingSort?: string[];
    sortColumn?: string[];
    sortOrder?: string[];
}

export interface DashboardComponentGroupingSortProperties {
    groupingSorts?: DashboardComponentGroupingSort[];
}

export interface DashboardComponentSection {
    columnSize?: DashboardComponentSize[];
    components?: DashboardComponent[];
}

export interface DashboardComponentSortInfo {
    sortColumn?: string[];
    sortOrder?: string[];
}

export interface DashboardFilter {
    dashboardFilterOptions?: DashboardFilterOption[];
    name?: string[];
}

export interface DashboardFilterColumn {
    column?: string[];
}

export interface DashboardFilterOption {
    operator?: DashboardFilterOperation[];
    values?: string[];
}

export interface DashboardFlexTableComponentProperties {
    decimalPrecision?: number[];
    flexTableColumn?: DashboardComponentColumn[];
    flexTableSortInfo?: DashboardComponentSortInfo[];
    hideChatterPhotos?: boolean[];
}

export interface DashboardFolder extends Folder {
}

export interface DashboardGridComponent {
    colSpan?: number[];
    columnIndex?: number[];
    dashboardComponent?: DashboardComponent[];
    rowIndex?: number[];
    rowSpan?: number[];
}

export interface DashboardGridLayout {
    dashboardGridComponents?: DashboardGridComponent[];
    numberOfColumns?: number[];
    rowHeight?: number[];
}

export interface DashboardMobileSettings {
    enableDashboardIPadApp?: boolean[];
}

export interface DashboardTableColumn {
    aggregateType?: ReportSummaryType[];
    calculatePercent?: boolean[];
    column?: string[];
    decimalPlaces?: number[];
    showSubTotal?: boolean[];
    showTotal?: boolean[];
    sortBy?: DashboardComponentFilter[];
}

export interface DataCategory {
    dataCategory?: DataCategory[];
    label?: string[];
    name?: string[];
}

export interface DataCategoryGroup extends Metadata {
    active?: boolean[];
    dataCategory?: DataCategory[];
    description?: string[];
    label?: string[];
    objectUsage?: ObjectUsage[];
}

export interface DataDotComSettings extends Metadata {
    enableAccountExportButtonOff?: boolean[];
    enableAccountImportButtonOff?: boolean[];
    enableAllowDupeContactFromLead?: boolean[];
    enableAllowDupeLeadFromContact?: boolean[];
    enableCleanUpgradeRequested?: boolean[];
    enableContactExportButtonOff?: boolean[];
    enableContactImportButtonOff?: boolean[];
}

export interface DefaultShortcut {
    action?: string[];
    active?: boolean[];
    keyCommand?: string[];
}

export interface DelegateGroup extends Metadata {
    customObjects?: string[];
    groups?: string[];
    label?: string[];
    loginAccess?: boolean[];
    permissionSets?: string[];
    profiles?: string[];
    roles?: string[];
}

export interface DeleteResult {
    errors?: Error[];
    fullName?: string[];
    success?: boolean[];
}

export interface DeployDetails {
    componentFailures?: DeployMessage[];
    componentSuccesses?: DeployMessage[];
    retrieveResult?: RetrieveResult[];
    runTestResult?: RunTestsResult[];
}

export interface DeploymentSettings extends Metadata {
    doesSkipAsyncApexValidation?: boolean[];
}

export interface DeployMessage {
    changed?: boolean[];
    columnNumber?: number[];
    componentType?: string[];
    created?: boolean[];
    createdDate?: string[];
    deleted?: boolean[];
    fileName?: string[];
    fullName?: string[];
    id?: string[];
    lineNumber?: number[];
    problem?: string[];
    problemType?: DeployProblemType[];
    success?: boolean[];
}

export interface DeployOptions {
    allowMissingFiles?: boolean[];
    autoUpdatePackage?: boolean[];
    checkOnly?: boolean[];
    ignoreWarnings?: boolean[];
    performRetrieve?: boolean[];
    purgeOnDelete?: boolean[];
    rollbackOnError?: boolean[];
    runTests?: string[];
    singlePackage?: boolean[];
    testLevel?: TestLevel[];
}

export interface DeployResult {
    canceledBy?: string[];
    canceledByName?: string[];
    checkOnly?: boolean[];
    completedDate?: string[];
    createdBy?: string[];
    createdByName?: string[];
    createdDate?: string[];
    details?: DeployDetails[];
    done?: boolean[];
    errorMessage?: string[];
    errorStatusCode?: StatusCode[];
    id?: ID[];
    ignoreWarnings?: boolean[];
    lastModifiedDate?: string[];
    numberComponentErrors?: number[];
    numberComponentsDeployed?: number[];
    numberComponentsTotal?: number[];
    numberTestErrors?: number[];
    numberTestsCompleted?: number[];
    numberTestsTotal?: number[];
    rollbackOnError?: boolean[];
    runTestsEnabled?: boolean[];
    startDate?: string[];
    stateDetail?: string[];
    status?: DeployStatus[];
    success?: boolean[];
}

export interface DescribeMetadataObject {
    childXmlNames?: string[];
    directoryName?: string[];
    inFolder?: boolean[];
    metaFile?: boolean[];
    suffix?: string[];
    xmlName?: string[];
}

export interface DescribeMetadataResult {
    metadataObjects?: DescribeMetadataObject[];
    organizationNamespace?: string[];
    partialSaveAllowed?: boolean[];
    testRequired?: boolean[];
}

export interface DescribeValueTypeResult {
    apiCreatable?: boolean[];
    apiDeletable?: boolean[];
    apiReadable?: boolean[];
    apiUpdatable?: boolean[];
    parentField?: ValueTypeField[];
    valueTypeFields?: ValueTypeField[];
}

export interface DevHubSettings extends Metadata {
    enableShapeExportPref?: boolean[];
}

export interface DiscoverySettings extends Metadata {
    enableEinsteinAnswersPref?: boolean[];
}

export interface Document extends MetadataWithContent {
    description?: string[];
    internalUseOnly?: boolean[];
    keywords?: string[];
    name?: string[];
    public?: boolean[];
}

export interface DocumentFolder extends Folder {
}

export interface DocumentType extends Metadata {
    description?: string[];
    isActive?: boolean[];
    masterLabel?: string[];
}

export interface DuplicateRule extends Metadata {
    actionOnInsert?: DupeActionType[];
    actionOnUpdate?: DupeActionType[];
    alertText?: string[];
    description?: string[];
    duplicateRuleFilter?: DuplicateRuleFilter[];
    duplicateRuleMatchRules?: DuplicateRuleMatchRule[];
    isActive?: boolean[];
    masterLabel?: string[];
    operationsOnInsert?: string[];
    operationsOnUpdate?: string[];
    securityOption?: DupeSecurityOptionType[];
    sortOrder?: number[];
}

export interface DuplicateRuleFilter {
    booleanFilter?: string[];
    duplicateRuleFilterItems?: DuplicateRuleFilterItem[];
}

export interface DuplicateRuleFilterItem extends FilterItem {
    sortOrder?: number[];
    table?: string[];
}

export interface DuplicateRuleMatchRule {
    matchRuleSObjectType?: string[];
    matchingRule?: string[];
    objectMapping?: ObjectMapping[];
}

export interface EACSettings extends Metadata {
    enableEACForEveryonePref?: boolean[];
    enableInboxActivitySharing?: boolean[];
    enableInsightsInTimeline?: boolean[];
    enableInsightsInTimelineEacStd?: boolean[];
}

export interface EclairGeoData extends MetadataWithContent {
    maps?: EclairMap[];
    masterLabel?: string[];
}

export interface EclairMap {
    boundingBoxBottom?: number[];
    boundingBoxLeft?: number[];
    boundingBoxRight?: number[];
    boundingBoxTop?: number[];
    mapLabel?: string[];
    mapName?: string[];
    projection?: string[];
}

export interface EmailAdministrationSettings extends Metadata {
    enableComplianceBcc?: boolean[];
    enableEmailConsentManagement?: boolean[];
    enableEmailSenderIdCompliance?: boolean[];
    enableEmailSpfCompliance?: boolean[];
    enableEmailToSalesforce?: boolean[];
    enableEmailWorkflowApproval?: boolean[];
    enableEnhancedEmailEnabled?: boolean[];
    enableHandleBouncedEmails?: boolean[];
    enableHtmlEmail?: boolean[];
    enableListEmailLogActivities?: boolean[];
    enableResendBouncedEmails?: boolean[];
    enableRestrictTlsToDomains?: boolean[];
    enableSendThroughGmailPref?: boolean[];
    enableSendViaExchangePref?: boolean[];
    enableSendViaGmailPref?: boolean[];
    enableSetMatchingEmailsOnBounce?: boolean[];
    enableUseOrgFootersForExtTrans?: boolean[];
    sendEmailsEvenWhenAutomationUpdatesSameRecord?: boolean[];
    sendMassEmailNotification?: boolean[];
    sendTextOnlySystemEmails?: boolean[];
}

export interface EmailFolder extends Folder {
}

export interface EmailIntegrationSettings extends Metadata {
    doesEmailLogAsEmailMessageInOutlook?: boolean[];
    doesGmailStayConnectedToSalesforce?: boolean[];
    enableContactAndEventSync?: boolean[];
    enableEmailTrackingInMobile?: boolean[];
    enableEngageForOutlook?: boolean[];
    enableGmailIntegration?: boolean[];
    enableOutlookIntegration?: boolean[];
    enableProductivityFeatures?: boolean[];
    enableSupplementalContactInfoInMobile?: boolean[];
    isLayoutCustomizationAllowed?: boolean[];
    shouldUseTrustedDomainsList?: boolean[];
}

export interface EmailServicesAddress {
    authorizedSenders?: string[];
    developerName?: string[];
    isActive?: boolean[];
    localPart?: string[];
    runAsUser?: string[];
}

export interface EmailServicesFunction extends Metadata {
    apexClass?: string[];
    attachmentOption?: EmailServicesAttOptions[];
    authenticationFailureAction?: EmailServicesErrorAction[];
    authorizationFailureAction?: EmailServicesErrorAction[];
    authorizedSenders?: string[];
    emailServicesAddresses?: EmailServicesAddress[];
    errorRoutingAddress?: string[];
    functionInactiveAction?: EmailServicesErrorAction[];
    functionName?: string[];
    isActive?: boolean[];
    isAuthenticationRequired?: boolean[];
    isErrorRoutingEnabled?: boolean[];
    isTextAttachmentsAsBinary?: boolean[];
    isTlsRequired?: boolean[];
    overLimitAction?: EmailServicesErrorAction[];
}

export interface EmailTemplate extends MetadataWithContent {
    apiVersion?: number[];
    attachedDocuments?: string[];
    attachments?: Attachment[];
    available?: boolean[];
    description?: string[];
    encodingKey?: Encoding[];
    letterhead?: string[];
    name?: string[];
    packageVersions?: PackageVersion[];
    relatedEntityType?: string[];
    style?: EmailTemplateStyle[];
    subject?: string[];
    textOnly?: string[];
    type?: EmailTemplateType[];
    uiType?: EmailTemplateUiType[];
}

export interface EmailTemplateSettings extends Metadata {
    enableLwcEmailTemplateBuilder?: boolean[];
    enableTemplateEnhancedFolderPref?: boolean[];
}

export interface EmailToCaseRoutingAddress {
    addressType?: EmailToCaseRoutingAddressType[];
    authorizedSenders?: string[];
    caseOrigin?: string[];
    caseOwner?: string[];
    caseOwnerType?: string[];
    casePriority?: string[];
    createTask?: boolean[];
    emailAddress?: string[];
    emailServicesAddress?: string[];
    isVerified?: boolean[];
    routingName?: string[];
    saveEmailHeaders?: boolean[];
    taskStatus?: string[];
}

export interface EmailToCaseSettings {
    enableE2CAttachmentAsFile?: boolean[];
    enableE2CSourceTracking?: boolean[];
    enableEmailToCase?: boolean[];
    enableHtmlEmail?: boolean[];
    enableOnDemandEmailToCase?: boolean[];
    enableThreadIDInBody?: boolean[];
    enableThreadIDInSubject?: boolean[];
    notifyOwnerOnNewCaseEmail?: boolean[];
    overEmailLimitAction?: EmailToCaseOnFailureActionType[];
    preQuoteSignature?: boolean[];
    routingAddresses?: EmailToCaseRoutingAddress[];
    unauthorizedSenderAction?: EmailToCaseOnFailureActionType[];
}

export interface EmbeddedServiceAppointmentSettings {
    appointmentConfirmImg?: string[];
    enabled?: boolean[];
    homeImg?: string[];
    logoImg?: string[];
    shouldShowExistingAppointment?: boolean[];
    shouldShowNewAppointment?: boolean[];
}

export interface EmbeddedServiceBranding extends Metadata {
    contrastInvertedColor?: string[];
    contrastPrimaryColor?: string[];
    embeddedServiceConfig?: string[];
    font?: string[];
    height?: number[];
    masterLabel?: string[];
    navBarColor?: string[];
    primaryColor?: string[];
    secondaryColor?: string[];
    width?: number[];
}

export interface EmbeddedServiceConfig extends Metadata {
    areGuestUsersAllowed?: boolean[];
    authMethod?: EmbeddedServiceAuthMethod[];
    embeddedServiceAppointmentSettings?: EmbeddedServiceAppointmentSettings[];
    embeddedServiceCustomComponents?: EmbeddedServiceCustomComponent[];
    embeddedServiceCustomLabels?: EmbeddedServiceCustomLabel[];
    embeddedServiceFlowConfig?: EmbeddedServiceFlowConfig[];
    embeddedServiceFlows?: EmbeddedServiceFlow[];
    embeddedServiceLayouts?: EmbeddedServiceLayout[];
    masterLabel?: string[];
    shouldHideAuthDialog?: boolean[];
    site?: string[];
}

export interface EmbeddedServiceCustomComponent {
    componentBundleType?: EmbeddedServiceComponentBundleType[];
    customComponent?: string[];
    customComponentType?: EmbeddedServiceCustomComponentType[];
}

export interface EmbeddedServiceCustomLabel {
    customLabel?: string[];
    feature?: EmbeddedServiceFeature[];
    labelKey?: EmbeddedServiceLabelKey[];
}

export interface EmbeddedServiceFlow {
    flow?: string[];
    flowType?: EmbeddedServiceFlowType[];
    isAuthenticationRequired?: boolean[];
}

export interface EmbeddedServiceFlowConfig extends Metadata {
    enabled?: boolean[];
}

export interface EmbeddedServiceLayout {
    embeddedServiceLayoutRules?: EmbeddedServiceLayoutRule[];
    layout?: string[];
    layoutType?: EmbeddedServiceLayoutType[];
}

export interface EmbeddedServiceLayoutRule {
    appointmentStatus?: string[];
}

export interface EmbeddedServiceLiveAgent extends Metadata {
    avatarImg?: string[];
    embeddedServiceConfig?: string[];
    embeddedServiceQuickActions?: EmbeddedServiceQuickAction[];
    enabled?: boolean[];
    fontSize?: EmbeddedServiceFontSize[];
    headerBackgroundImg?: string[];
    isOfflineCaseEnabled?: boolean[];
    isQueuePositionEnabled?: boolean[];
    liveAgentChatUrl?: string[];
    liveAgentContentUrl?: string[];
    liveChatButton?: string[];
    liveChatDeployment?: string[];
    masterLabel?: string[];
    offlineCaseBackgroundImg?: string[];
    prechatBackgroundImg?: string[];
    prechatEnabled?: boolean[];
    prechatJson?: string[];
    scenario?: EmbeddedServiceScenario[];
    smallCompanyLogoImg?: string[];
    waitingStateBackgroundImg?: string[];
}

export interface EmbeddedServiceMenuItem {
    channel?: string[];
    channelType?: EmbeddedServiceChannelType[];
    displayOrder?: number[];
    phoneNumber?: string[];
}

export interface EmbeddedServiceMenuSettings extends Metadata {
    branding?: string[];
    embeddedServiceMenuItems?: EmbeddedServiceMenuItem[];
    isEnabled?: boolean[];
    masterLabel?: string[];
    site?: string[];
}

export interface EmbeddedServiceQuickAction {
    embeddedServiceLiveAgent?: string[];
    order?: number[];
    quickActionDefinition?: string[];
    quickActionType?: EmbeddedServiceQuickActionType[];
}

export interface EncryptionKeySettings extends Metadata {
    canOptOutOfDerivationWithBYOK?: boolean[];
    enableCacheOnlyKeys?: boolean[];
    enableReplayDetection?: boolean[];
}

export interface EnhancedNotesSettings extends Metadata {
    enableEnhancedNotes?: boolean[];
    enableTasksOnEnhancedNotes?: boolean[];
}

export interface EntitlementProcess extends Metadata {
    SObjectType?: string[];
    active?: boolean[];
    businessHours?: string[];
    description?: string[];
    entryStartDateField?: string[];
    exitCriteriaBooleanFilter?: string[];
    exitCriteriaFilterItems?: FilterItem[];
    exitCriteriaFormula?: string[];
    isRecordTypeApplied?: boolean[];
    isVersionDefault?: boolean[];
    milestones?: EntitlementProcessMilestoneItem[];
    name?: string[];
    recordType?: string[];
    versionMaster?: string[];
    versionNotes?: string[];
    versionNumber?: number[];
}

export interface EntitlementProcessMilestoneItem {
    businessHours?: string[];
    criteriaBooleanFilter?: string[];
    milestoneCriteriaFilterItems?: FilterItem[];
    milestoneCriteriaFormula?: string[];
    milestoneName?: string[];
    minutesCustomClass?: string[];
    minutesToComplete?: number[];
    successActions?: WorkflowActionReference[];
    timeTriggers?: EntitlementProcessMilestoneTimeTrigger[];
    useCriteriaStartTime?: boolean[];
}

export interface EntitlementProcessMilestoneTimeTrigger {
    actions?: WorkflowActionReference[];
    timeLength?: number[];
    workflowTimeTriggerUnit?: MilestoneTimeUnits[];
}

export interface EntitlementSettings extends Metadata {
    assetLookupLimitedToActiveEntitlementsOnAccount?: boolean[];
    assetLookupLimitedToActiveEntitlementsOnContact?: boolean[];
    assetLookupLimitedToSameAccount?: boolean[];
    assetLookupLimitedToSameContact?: boolean[];
    enableEntitlementVersioning?: boolean[];
    enableEntitlements?: boolean[];
    enableMilestoneFeedItem?: boolean[];
    enableMilestoneStoppedTime?: boolean[];
    entitlementLookupLimitedToActiveStatus?: boolean[];
    entitlementLookupLimitedToSameAccount?: boolean[];
    entitlementLookupLimitedToSameAsset?: boolean[];
    entitlementLookupLimitedToSameContact?: boolean[];
    ignoreMilestoneBusinessHours?: boolean[];
}

export interface EntitlementTemplate extends Metadata {
    businessHours?: string[];
    casesPerEntitlement?: number[];
    entitlementProcess?: string[];
    isPerIncident?: boolean[];
    term?: number[];
    type?: string[];
}

export interface EntityImplements extends Metadata {
    fieldMap?: FieldImplements[];
    interface?: string[];
    isDefault?: boolean[];
}

export interface Error {
    extendedErrorDetails?: ExtendedErrorDetails[];
    fields?: string[];
    message?: string[];
    statusCode?: StatusCode[];
}

export interface EscalationAction {
    assignedTo?: string[];
    assignedToTemplate?: string[];
    assignedToType?: AssignToLookupValueType[];
    minutesToEscalation?: number[];
    notifyCaseOwner?: boolean[];
    notifyEmail?: string[];
    notifyTo?: string[];
    notifyToTemplate?: string[];
}

export interface EscalationRule extends Metadata {
    active?: boolean[];
    ruleEntry?: RuleEntry[];
}

export interface EscalationRules extends Metadata {
    escalationRule?: EscalationRule[];
}

export interface EssentialsSettings extends Metadata {
    emailConnectorEnabled?: boolean[];
    essentialsAppEnabled?: boolean[];
}

export interface EssentialsTrialOrgSettings extends Metadata {
    enableSampleDataDeleted?: boolean[];
}

export interface EventSettings extends Metadata {
    enableApexLimitEvents?: boolean[];
    enableDeleteMonitoringData?: boolean[];
    enableDynamicStreamingChannel?: boolean[];
    enableEventLogWaveIntegration?: boolean[];
    enableLoginForensics?: boolean[];
    enableStreamingApi?: boolean[];
    enableTerminateOldestSession?: boolean[];
    enableTransactionSecurityPolicies?: boolean[];
}

export interface ExperienceBundleSettings extends Metadata {
    enableExperienceBundleMetadata?: boolean[];
}

export interface ExtendedErrorDetails {
    extendedErrorCode?: ExtendedErrorCode[];
}

export interface ExternalConnectionProperty {
    propertyName?: ConnectionPropertyName[];
    propertyValue?: string[];
}

export interface ExternalDataSource extends Metadata {
    authProvider?: string[];
    certificate?: string[];
    customConfiguration?: string[];
    customHttpHeaders?: CustomHttpHeader[];
    endpoint?: string[];
    isWritable?: boolean[];
    label?: string[];
    oauthRefreshToken?: string[];
    oauthScope?: string[];
    oauthToken?: string[];
    password?: string[];
    principalType?: ExternalPrincipalType[];
    protocol?: AuthenticationProtocol[];
    repository?: string[];
    type?: ExternalDataSourceType[];
    username?: string[];
    version?: string[];
}

export interface ExternalServiceRegistration extends Metadata {
    description?: string[];
    label?: string[];
    namedCredential?: string[];
    schema?: string[];
    schemaType?: string[];
    schemaUrl?: string[];
    status?: string[];
}

export interface ExternalServicesSettings extends Metadata {
    enableEnhancedExternalServices?: boolean[];
}

export interface FeedFilterCriterion {
    feedItemType?: FeedItemType[];
    feedItemVisibility?: FeedItemVisibility[];
    relatedSObjectType?: string[];
}

export interface FeedItemSettings {
    characterLimit?: number[];
    displayFormat?: FeedItemDisplayFormat[];
    feedItemType?: FeedItemType[];
}

export interface FeedLayout {
    autocollapsePublisher?: boolean[];
    compactFeed?: boolean[];
    feedFilterPosition?: FeedLayoutFilterPosition[];
    feedFilters?: FeedLayoutFilter[];
    fullWidthFeed?: boolean[];
    hideSidebar?: boolean[];
    highlightExternalFeedItems?: boolean[];
    leftComponents?: FeedLayoutComponent[];
    rightComponents?: FeedLayoutComponent[];
    useInlineFiltersInConsole?: boolean[];
}

export interface FeedLayoutComponent {
    componentType?: FeedLayoutComponentType[];
    height?: number[];
    page?: string[];
}

export interface FeedLayoutFilter {
    feedFilterName?: string[];
    feedFilterType?: FeedLayoutFilterType[];
    feedItemType?: FeedItemType[];
}

export interface FieldImplements {
    field?: string[];
    interfaceField?: string[];
}

export interface FieldMapping {
    SObjectType?: string[];
    developerName?: string[];
    fieldMappingRows?: FieldMappingRow[];
    masterLabel?: string[];
}

export interface FieldMappingField {
    dataServiceField?: string[];
    dataServiceObjectName?: string[];
    priority?: number[];
}

export interface FieldMappingRow {
    SObjectType?: string[];
    fieldMappingFields?: FieldMappingField[];
    fieldName?: string[];
    mappingOperation?: MappingOperation[];
}

export interface FieldOverride {
    field?: string[];
    formula?: string[];
    literalValue?: string[];
}

export interface FieldServiceSettings extends Metadata {
    capacityUsageCalcClassId?: string[];
    doesAllowEditSaForCrew?: boolean[];
    doesShareSaParentWoWithAr?: boolean[];
    doesShareSaWithAr?: boolean[];
    enableWorkOrders?: boolean[];
    fieldServiceNotificationsOrgPref?: boolean[];
    fieldServiceOrgPref?: boolean[];
    isGeoCodeSyncEnabled?: boolean[];
    isLocationHistoryEnabled?: boolean[];
    serviceAppointmentsDueDateOffsetOrgValue?: number[];
    workOrderLineItemSearchFields?: string[];
    workOrderSearchFields?: string[];
}

export interface FieldSet extends Metadata {
    availableFields?: FieldSetItem[];
    description?: string[];
    displayedFields?: FieldSetItem[];
    label?: string[];
}

export interface FieldSetItem {
    field?: string[];
    isFieldManaged?: boolean[];
    isRequired?: boolean[];
}

export interface FieldSetTranslation {
    label?: string[];
    name?: string[];
}

export interface FieldValue {
    name?: string[];
    value?: any[];
}

export interface FileProperties {
    createdById?: string[];
    createdByName?: string[];
    createdDate?: string[];
    fileName?: string[];
    fullName?: string[];
    id?: string[];
    lastModifiedById?: string[];
    lastModifiedByName?: string[];
    lastModifiedDate?: string[];
    manageableState?: ManageableState[];
    namespacePrefix?: string[];
    type?: string[];
}

export interface FilesConnectSettings extends Metadata {
    enableContentHubAllowed?: boolean[];
    enableContentHubCvtLinksAllowed?: boolean[];
    enableContentHubEOSearchLayout?: boolean[];
}

export interface FileTypeDispositionAssignmentBean {
    behavior?: FileDownloadBehavior[];
    fileType?: FileType[];
    securityRiskFileType?: boolean[];
}

export interface FileUploadAndDownloadSecuritySettings extends Metadata {
    dispositions?: FileTypeDispositionAssignmentBean[];
    noHtmlUploadAsAttachment?: boolean[];
}

export interface FilterItem {
    field?: string[];
    operation?: FilterOperation[];
    value?: string[];
    valueField?: string[];
}

export interface FindSimilarOppFilter {
    similarOpportunitiesDisplayColumns?: string[];
    similarOpportunitiesMatchFields?: string[];
}

export interface FiscalYearSettings {
    fiscalYearNameBasedOn?: string[];
    startMonth?: string[];
}

export interface FlexiPage extends Metadata {
    description?: string[];
    flexiPageRegions?: FlexiPageRegion[];
    masterLabel?: string[];
    parentFlexiPage?: string[];
    platformActionlist?: PlatformActionList[];
    quickActionList?: QuickActionList[];
    sobjectType?: string[];
    template?: FlexiPageTemplateInstance[];
    type?: FlexiPageType[];
}

export interface FlexiPageRegion {
    appendable?: RegionFlagStatus[];
    componentInstances?: ComponentInstance[];
    mode?: FlexiPageRegionMode[];
    name?: string[];
    prependable?: RegionFlagStatus[];
    replaceable?: RegionFlagStatus[];
    type?: FlexiPageRegionType[];
}

export interface FlexiPageTemplateInstance {
    name?: string[];
    properties?: ComponentInstanceProperty[];
}

export interface Flow extends Metadata {
    actionCalls?: FlowActionCall[];
    apexPluginCalls?: FlowApexPluginCall[];
    assignments?: FlowAssignment[];
    choices?: FlowChoice[];
    constants?: FlowConstant[];
    decisions?: FlowDecision[];
    description?: string[];
    dynamicChoiceSets?: FlowDynamicChoiceSet[];
    formulas?: FlowFormula[];
    interviewLabel?: string[];
    isAdditionalPermissionRequiredToRun?: boolean[];
    isTemplate?: boolean[];
    label?: string[];
    loops?: FlowLoop[];
    processMetadataValues?: FlowMetadataValue[];
    processType?: FlowProcessType[];
    recordCreates?: FlowRecordCreate[];
    recordDeletes?: FlowRecordDelete[];
    recordLookups?: FlowRecordLookup[];
    recordUpdates?: FlowRecordUpdate[];
    screens?: FlowScreen[];
    stages?: FlowStage[];
    start?: FlowStart[];
    startElementReference?: string[];
    status?: FlowVersionStatus[];
    steps?: FlowStep[];
    subflows?: FlowSubflow[];
    textTemplates?: FlowTextTemplate[];
    variables?: FlowVariable[];
    waits?: FlowWait[];
}

export interface FlowActionCall extends FlowNode {
    actionName?: string[];
    actionType?: InvocableActionType[];
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    inputParameters?: FlowActionCallInputParameter[];
    outputParameters?: FlowActionCallOutputParameter[];
}

export interface FlowActionCallInputParameter extends FlowBaseElement {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowActionCallOutputParameter extends FlowBaseElement {
    assignToReference?: string[];
    name?: string[];
}

export interface FlowApexPluginCall extends FlowNode {
    apexClass?: string[];
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    inputParameters?: FlowApexPluginCallInputParameter[];
    outputParameters?: FlowApexPluginCallOutputParameter[];
}

export interface FlowApexPluginCallInputParameter extends FlowBaseElement {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowApexPluginCallOutputParameter extends FlowBaseElement {
    assignToReference?: string[];
    name?: string[];
}

export interface FlowAssignment extends FlowNode {
    assignmentItems?: FlowAssignmentItem[];
    connector?: FlowConnector[];
}

export interface FlowAssignmentItem extends FlowBaseElement {
    assignToReference?: string[];
    operator?: FlowAssignmentOperator[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowBaseElement {
    processMetadataValues?: FlowMetadataValue[];
}

export interface FlowCategory extends Metadata {
    description?: string[];
    flowCategoryItems?: FlowCategoryItems[];
    masterLabel?: string[];
}

export interface FlowCategoryItems {
    flow?: string[];
}

export interface FlowChoice extends FlowElement {
    choiceText?: string[];
    dataType?: FlowDataType[];
    userInput?: FlowChoiceUserInput[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowChoiceTranslation {
    choiceText?: string[];
    name?: string[];
    userInput?: FlowChoiceUserInputTranslation[];
}

export interface FlowChoiceUserInput extends FlowBaseElement {
    isRequired?: boolean[];
    promptText?: string[];
    validationRule?: FlowInputValidationRule[];
}

export interface FlowChoiceUserInputTranslation {
    promptText?: string[];
    validationRule?: FlowInputValidationRuleTranslation[];
}

export interface FlowCondition extends FlowBaseElement {
    leftValueReference?: string[];
    operator?: FlowComparisonOperator[];
    rightValue?: FlowElementReferenceOrValue[];
}

export interface FlowConnector extends FlowBaseElement {
    targetReference?: string[];
}

export interface FlowConstant extends FlowElement {
    dataType?: FlowDataType[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowCoverageResult {
    elementsNotCovered?: string[];
    flowId?: string[];
    flowName?: string[];
    flowNamespace?: string[];
    numElements?: number[];
    numElementsNotCovered?: number[];
    processType?: FlowProcessType[];
}

export interface FlowCoverageWarning {
    flowId?: string[];
    flowName?: string[];
    flowNamespace?: string[];
    message?: string[];
}

export interface FlowDecision extends FlowNode {
    defaultConnector?: FlowConnector[];
    defaultConnectorLabel?: string[];
    rules?: FlowRule[];
}

export interface FlowDefinition extends Metadata {
    activeVersionNumber?: number[];
    description?: string[];
    masterLabel?: string[];
}

export interface FlowDefinitionTranslation {
    flows?: FlowTranslation[];
    fullName?: string[];
    label?: string[];
}

export interface FlowDynamicChoiceSet extends FlowElement {
    dataType?: FlowDataType[];
    displayField?: string[];
    filters?: FlowRecordFilter[];
    limit?: number[];
    object?: string[];
    outputAssignments?: FlowOutputFieldAssignment[];
    picklistField?: string[];
    picklistObject?: string[];
    sortField?: string[];
    sortOrder?: SortOrder[];
    valueField?: string[];
}

export interface FlowElement extends FlowBaseElement {
    description?: string[];
    name?: string[];
}

export interface FlowElementReferenceOrValue {
    booleanValue?: boolean[];
    dateTimeValue?: string[];
    dateValue?: string[];
    elementReference?: string[];
    numberValue?: number[];
    stringValue?: string[];
}

export interface FlowFormula extends FlowElement {
    dataType?: FlowDataType[];
    expression?: string[];
    scale?: number[];
}

export interface FlowInputFieldAssignment extends FlowBaseElement {
    field?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowInputValidationRule {
    errorMessage?: string[];
    formulaExpression?: string[];
}

export interface FlowInputValidationRuleTranslation {
    errorMessage?: string[];
}

export interface FlowLoop extends FlowNode {
    assignNextValueToReference?: string[];
    collectionReference?: string[];
    iterationOrder?: IterationOrder[];
    nextValueConnector?: FlowConnector[];
    noMoreValuesConnector?: FlowConnector[];
}

export interface FlowMetadataValue {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowNode extends FlowElement {
    label?: string[];
    locationX?: number[];
    locationY?: number[];
}

export interface FlowOutputFieldAssignment extends FlowBaseElement {
    assignToReference?: string[];
    field?: string[];
}

export interface FlowRecordCreate extends FlowNode {
    assignRecordIdToReference?: string[];
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    inputAssignments?: FlowInputFieldAssignment[];
    inputReference?: string[];
    object?: string[];
}

export interface FlowRecordDelete extends FlowNode {
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    filters?: FlowRecordFilter[];
    inputReference?: string[];
    object?: string[];
}

export interface FlowRecordFilter extends FlowBaseElement {
    field?: string[];
    operator?: FlowRecordFilterOperator[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowRecordLookup extends FlowNode {
    assignNullValuesIfNoRecordsFound?: boolean[];
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    filters?: FlowRecordFilter[];
    getFirstRecordOnly?: boolean[];
    object?: string[];
    outputAssignments?: FlowOutputFieldAssignment[];
    outputReference?: string[];
    queriedFields?: string[];
    sortField?: string[];
    sortOrder?: SortOrder[];
    storeOutputAutomatically?: boolean[];
}

export interface FlowRecordUpdate extends FlowNode {
    connector?: FlowConnector[];
    faultConnector?: FlowConnector[];
    filters?: FlowRecordFilter[];
    inputAssignments?: FlowInputFieldAssignment[];
    inputReference?: string[];
    object?: string[];
}

export interface FlowRule extends FlowElement {
    conditionLogic?: string[];
    conditions?: FlowCondition[];
    connector?: FlowConnector[];
    label?: string[];
}

export interface FlowSchedule {
    frequency?: FlowStartFrequency[];
    startDate?: string[];
    startTime?: number[];
}

export interface FlowScreen extends FlowNode {
    allowBack?: boolean[];
    allowFinish?: boolean[];
    allowPause?: boolean[];
    connector?: FlowConnector[];
    fields?: FlowScreenField[];
    helpText?: string[];
    pausedText?: string[];
    rules?: FlowScreenRule[];
    showFooter?: boolean[];
    showHeader?: boolean[];
}

export interface FlowScreenField extends FlowElement {
    choiceReferences?: string[];
    dataType?: FlowDataType[];
    defaultSelectedChoiceReference?: string[];
    defaultValue?: FlowElementReferenceOrValue[];
    extensionName?: string[];
    fieldText?: string[];
    fieldType?: FlowScreenFieldType[];
    helpText?: string[];
    inputParameters?: FlowScreenFieldInputParameter[];
    isRequired?: boolean[];
    isVisible?: boolean[];
    outputParameters?: FlowScreenFieldOutputParameter[];
    scale?: number[];
    storeOutputAutomatically?: boolean[];
    validationRule?: FlowInputValidationRule[];
    visibilityRule?: FlowVisibilityRule[];
}

export interface FlowScreenFieldInputParameter extends FlowBaseElement {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowScreenFieldOutputParameter extends FlowBaseElement {
    assignToReference?: string[];
    name?: string[];
}

export interface FlowScreenFieldTranslation {
    fieldText?: string[];
    helpText?: string[];
    name?: string[];
    validationRule?: FlowInputValidationRuleTranslation[];
}

export interface FlowScreenRule extends FlowBaseElement {
    conditionLogic?: string[];
    conditions?: FlowCondition[];
    label?: string[];
    ruleActions?: FlowScreenRuleAction[];
}

export interface FlowScreenRuleAction extends FlowBaseElement {
    attribute?: string[];
    fieldReference?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowScreenTranslation {
    fields?: FlowScreenFieldTranslation[];
    helpText?: string[];
    name?: string[];
    pausedText?: string[];
}

export interface FlowSettings extends Metadata {
    enableFlowBREncodedFixEnabled?: boolean[];
    enableFlowDeployAsActiveEnabled?: boolean[];
    enableFlowFieldFilterEnabled?: boolean[];
    enableFlowFormulasFixEnabled?: boolean[];
    enableFlowInterviewSharingEnabled?: boolean[];
    enableFlowNullPreviousValueFix?: boolean[];
    enableFlowPauseEnabled?: boolean[];
    enableFlowUseApexExceptionEmail?: boolean[];
    enableInvocableFlowFixEnabled?: boolean[];
    enableLightningRuntimeEnabled?: boolean[];
    enableUseFlowBuilder?: boolean[];
    isAccessToInvokedApexRequired?: boolean[];
    isEnhancedFlowListViewVisible?: boolean[];
    isManageFlowRequiredForAutomationCharts?: boolean[];
}

export interface FlowStage extends FlowElement {
    isActive?: boolean[];
    label?: string[];
    stageOrder?: number[];
}

export interface FlowStageTranslation {
    label?: string[];
    name?: string[];
}

export interface FlowStart extends FlowNode {
    connector?: FlowConnector[];
    filters?: FlowRecordFilter[];
    object?: string[];
    schedule?: FlowSchedule[];
    triggerType?: FlowTriggerType[];
}

export interface FlowStep extends FlowNode {
    connectors?: FlowConnector[];
}

export interface FlowSubflow extends FlowNode {
    connector?: FlowConnector[];
    flowName?: string[];
    inputAssignments?: FlowSubflowInputAssignment[];
    outputAssignments?: FlowSubflowOutputAssignment[];
}

export interface FlowSubflowInputAssignment extends FlowBaseElement {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowSubflowOutputAssignment extends FlowBaseElement {
    assignToReference?: string[];
    name?: string[];
}

export interface FlowTextTemplate extends FlowElement {
    text?: string[];
}

export interface FlowTextTemplateTranslation {
    name?: string[];
    text?: string[];
}

export interface FlowTranslation {
    choices?: FlowChoiceTranslation[];
    fullName?: string[];
    label?: string[];
    screens?: FlowScreenTranslation[];
    stages?: FlowStageTranslation[];
    textTemplates?: FlowTextTemplateTranslation[];
}

export interface FlowVariable extends FlowElement {
    apexClass?: string[];
    dataType?: FlowDataType[];
    isCollection?: boolean[];
    isInput?: boolean[];
    isOutput?: boolean[];
    objectType?: string[];
    scale?: number[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowVisibilityRule extends FlowBaseElement {
    conditionLogic?: string[];
    conditions?: FlowCondition[];
}

export interface FlowWait extends FlowNode {
    defaultConnector?: FlowConnector[];
    defaultConnectorLabel?: string[];
    faultConnector?: FlowConnector[];
    waitEvents?: FlowWaitEvent[];
}

export interface FlowWaitEvent extends FlowElement {
    conditionLogic?: string[];
    conditions?: FlowCondition[];
    connector?: FlowConnector[];
    eventType?: string[];
    inputParameters?: FlowWaitEventInputParameter[];
    label?: string[];
    outputParameters?: FlowWaitEventOutputParameter[];
}

export interface FlowWaitEventInputParameter extends FlowBaseElement {
    name?: string[];
    value?: FlowElementReferenceOrValue[];
}

export interface FlowWaitEventOutputParameter extends FlowBaseElement {
    assignToReference?: string[];
    name?: string[];
}

export interface Folder extends Metadata {
    accessType?: FolderAccessTypes[];
    folderShares?: FolderShare[];
    name?: string[];
    publicFolderAccess?: PublicFolderAccess[];
    sharedTo?: SharedTo[];
}

export interface FolderShare {
    accessLevel?: FolderShareAccessLevel[];
    sharedTo?: string[];
    sharedToType?: FolderSharedToType[];
}

export interface ForecastingCategoryMapping {
    forecastingItemCategoryApiName?: string[];
    weightedSourceCategories?: WeightedSourceCategory[];
}

export interface ForecastingDisplayedFamilySettings {
    productFamily?: string[];
}

export interface ForecastingSettings extends Metadata {
    defaultToPersonalCurrency?: boolean[];
    enableForecasts?: boolean[];
    forecastingCategoryMappings?: ForecastingCategoryMapping[];
    forecastingDisplayedFamilySettings?: ForecastingDisplayedFamilySettings[];
    forecastingTypeSettings?: ForecastingTypeSettings[];
}

export interface ForecastingTypeSettings {
    active?: boolean[];
    adjustmentsSettings?: AdjustmentsSettings[];
    displayedCategoryApiNames?: string[];
    forecastRangeSettings?: ForecastRangeSettings[];
    forecastedCategoryApiNames?: string[];
    forecastingDateType?: ForecastingDateType[];
    hasProductFamily?: boolean[];
    isAmount?: boolean[];
    isAvailable?: boolean[];
    isQuantity?: boolean[];
    managerAdjustableCategoryApiNames?: string[];
    masterLabel?: string[];
    name?: string[];
    opportunityListFieldsLabelMappings?: OpportunityListFieldsLabelMapping[];
    opportunityListFieldsSelectedSettings?: OpportunityListFieldsSelectedSettings[];
    opportunityListFieldsUnselectedSettings?: OpportunityListFieldsUnselectedSettings[];
    opportunitySplitName?: string[];
    ownerAdjustableCategoryApiNames?: string[];
    quotasSettings?: QuotasSettings[];
    territory2ModelName?: string[];
}

export interface ForecastRangeSettings {
    beginning?: number[];
    displaying?: number[];
    periodType?: PeriodTypes[];
}

export interface Form extends Metadata {
    description?: string[];
    formSections?: FormSection[];
    masterLabel?: string[];
}

export interface FormColumn {
    formItems?: FormItem[];
}

export interface FormItem {
    emptySpace?: boolean[];
    expression?: string[];
    formLayoutableItem?: string[];
    helpText?: string[];
}

export interface FormSection extends Metadata {
    formColumns?: FormColumn[];
    masterLabel?: string[];
    tabOrderType?: FormSectionTabOrder[];
}

export interface FormulaSettings extends Metadata {
    enableDSTAwareDatevalue?: boolean[];
}

export interface GlobalQuickActionTranslation {
    label?: string[];
    name?: string[];
}

export interface GlobalValueSet extends Metadata {
    customValue?: CustomValue[];
    description?: string[];
    masterLabel?: string[];
    sorted?: boolean[];
}

export interface GlobalValueSetTranslation extends Metadata {
    valueTranslation?: ValueTranslation[];
}

export interface GoogleAppsSettings extends Metadata {
    enableGmailButtons?: boolean[];
    enableGmailButtonsAndLinks?: boolean[];
    enableGmailLinks?: boolean[];
    enableGoogleDocs?: boolean[];
    enableGoogleDocsTab?: boolean[];
    enableGoogleTalk?: boolean[];
    googleAppsDomain?: string[];
    googleAppsDomainLinked?: boolean[];
    googleAppsDomainValidated?: boolean[];
}

export interface Group extends Metadata {
    doesIncludeBosses?: boolean[];
    name?: string[];
}

export interface HighVelocitySalesSettings extends Metadata {
    enableDispositionCategory?: boolean[];
    enableEngagementWaveAnalyticsPref?: boolean[];
    enableHighVelocitySales?: boolean[];
    enableHighVelocitySalesSetup?: boolean[];
}

export interface HistoryRetentionPolicy {
    archiveAfterMonths?: number[];
    archiveRetentionYears?: number[];
    description?: string[];
}

export interface Holiday {
    activityDate?: string[];
    businessHours?: string[];
    description?: string[];
    endTime?: number[];
    isRecurring?: boolean[];
    name?: string[];
    recurrenceDayOfMonth?: number[];
    recurrenceDayOfWeek?: string[];
    recurrenceDayOfWeekMask?: number[];
    recurrenceEndDate?: string[];
    recurrenceInstance?: string[];
    recurrenceInterval?: number[];
    recurrenceMonthOfYear?: string[];
    recurrenceStartDate?: string[];
    recurrenceType?: string[];
    startTime?: number[];
}

export interface HomePageComponent extends Metadata {
    body?: string[];
    height?: number[];
    links?: string[];
    page?: string[];
    pageComponentType?: PageComponentType[];
    showLabel?: boolean[];
    showScrollbars?: boolean[];
    width?: PageComponentWidth[];
}

export interface HomePageLayout extends Metadata {
    narrowComponents?: string[];
    wideComponents?: string[];
}

export interface IdeaReputationLevel {
    name?: string[];
    value?: number[];
}

export interface IdeasSettings extends Metadata {
    enableChatterProfile?: boolean[];
    enableHtmlIdea?: boolean[];
    enableIdeaMultipleCategory?: boolean[];
    enableIdeaThemes?: boolean[];
    enableIdeas?: boolean[];
    enableIdeasControllerExtensions?: boolean[];
    enableIdeasReputation?: boolean[];
    halfLife?: number[];
    ideasProfilePage?: string[];
}

export interface IfExpression {
    childName?: string[];
    expression?: string[];
}

export interface Index extends Metadata {
    fields?: IndexField[];
    label?: string[];
}

export interface IndexField {
    name?: string[];
    sortDirection?: string[];
}

export interface IndustriesManufacturingSettings extends Metadata {
    enableIndManufacturing?: boolean[];
    enableIndustriesMfgAccountForecast?: boolean[];
}

export interface IndustriesSettings extends Metadata {
    allowMultipleProducersToWorkOnSamePolicy?: boolean[];
    enableAccessToMasterListOfCoverageTypes?: boolean[];
    enableBlockResourceAvailabilityOrgPref?: boolean[];
    enableEventManagementOrgPref?: boolean[];
    enableHCReferralScoring?: boolean[];
    enableManyToManyRelationships?: boolean[];
    enableMortgageRlaTotalsOrgPref?: boolean[];
    enableMultiResourceOrgPref?: boolean[];
    enableObjectDetection?: boolean[];
    enableOverbookingOrgPref?: boolean[];
    enableProviderSearchSyncOrgPref?: boolean[];
    enableReferralScoring?: boolean[];
    enableSentimentAnalysis?: boolean[];
}

export interface InstalledPackage extends Metadata {
    activateRSS?: boolean[];
    password?: string[];
    versionNumber?: string[];
}

export interface IntegrationHubSettings extends Metadata {
    canonicalName?: string[];
    canonicalNameBindingChar?: string[];
    description?: string[];
    isEnabled?: boolean[];
    isProtected?: boolean[];
    masterLabel?: string[];
    setupData?: string[];
    setupDefinition?: string[];
    setupNamespace?: string[];
    setupSimpleName?: string[];
    uUID?: string[];
    version?: string[];
    versionBuild?: number[];
    versionMajor?: number[];
    versionMinor?: number[];
    versionSetUuid?: string[];
}

export interface IntegrationHubSettingsType extends Metadata {
    canonicalName?: string[];
    canonicalNameBindingChar?: string[];
    description?: string[];
    isEnabled?: boolean[];
    isProtected?: boolean[];
    masterLabel?: string[];
    setupNamespace?: string[];
    setupSimpleName?: string[];
    uUID?: string[];
    version?: string[];
    versionBuild?: number[];
    versionMajor?: number[];
    versionMinor?: number[];
    versionSetUuid?: string[];
}

export interface InvocableActionSettings extends Metadata {
    isPartialSaveAllowed?: boolean[];
}

export interface IoTSettings extends Metadata {
    enableIoT?: boolean[];
    enableIoTInsightsPilot?: boolean[];
    enableIoTUsageEmail?: boolean[];
}

export interface IpRange {
    description?: string[];
    end?: string[];
    start?: string[];
}

export interface IsvHammerSettings extends Metadata {
    enableIsvHammerSubIsOptedOut?: boolean[];
}

export interface KeyboardShortcuts {
    customShortcuts?: CustomShortcut[];
    defaultShortcuts?: DefaultShortcut[];
}

export interface Keyword {
    keyword?: string[];
}

export interface KeywordList extends Metadata {
    description?: string[];
    keywords?: Keyword[];
    masterLabel?: string[];
}

export interface KnowledgeAnswerSettings {
    assignTo?: string[];
    defaultArticleType?: string[];
    enableArticleCreation?: boolean[];
}

export interface KnowledgeCaseField {
    name?: string[];
}

export interface KnowledgeCaseFieldsSettings {
    field?: KnowledgeCaseField[];
}

export interface KnowledgeCaseSettings {
    articlePDFCreationProfile?: string[];
    articlePublicSharingCommunities?: KnowledgeCommunitiesSettings[];
    articlePublicSharingSites?: KnowledgeSitesSettings[];
    articlePublicSharingSitesChatterAnswers?: KnowledgeSitesSettings[];
    assignTo?: string[];
    customizationClass?: string[];
    defaultContributionArticleType?: string[];
    editor?: KnowledgeCaseEditor[];
    enableArticleCreation?: boolean[];
    enableArticlePublicSharingSites?: boolean[];
    enableCaseDataCategoryMapping?: boolean[];
    useProfileForPDFCreation?: boolean[];
}

export interface KnowledgeCommunitiesSettings {
    community?: string[];
}

export interface KnowledgeLanguage {
    active?: boolean[];
    defaultAssignee?: string[];
    defaultAssigneeType?: KnowledgeLanguageLookupValueType[];
    defaultReviewer?: string[];
    defaultReviewerType?: KnowledgeLanguageLookupValueType[];
    name?: string[];
}

export interface KnowledgeLanguageSettings {
    language?: KnowledgeLanguage[];
}

export interface KnowledgeSettings extends Metadata {
    answers?: KnowledgeAnswerSettings[];
    cases?: KnowledgeCaseSettings[];
    defaultLanguage?: string[];
    enableChatterQuestionKBDeflection?: boolean[];
    enableCreateEditOnArticlesTab?: boolean[];
    enableExternalMediaContent?: boolean[];
    enableKnowledge?: boolean[];
    enableKnowledgeArticleTextHighlights?: boolean[];
    enableKnowledgeKeywordAutoComplete?: boolean[];
    enableKnowledgeTitleAutoComplete?: boolean[];
    enableLightningKbAutoLoadRichTextField?: boolean[];
    enableLightningKnowledge?: boolean[];
    languages?: KnowledgeLanguageSettings[];
    showArticleSummariesCustomerPortal?: boolean[];
    showArticleSummariesInternalApp?: boolean[];
    showArticleSummariesPartnerPortal?: boolean[];
    showValidationStatusField?: boolean[];
    suggestedArticles?: KnowledgeSuggestedArticlesSettings[];
}

export interface KnowledgeSitesSettings {
    site?: string[];
}

export interface KnowledgeSuggestedArticlesSettings {
    caseFields?: KnowledgeCaseFieldsSettings[];
    useSuggestedArticlesForCase?: boolean[];
    workOrderFields?: KnowledgeWorkOrderFieldsSettings[];
    workOrderLineItemFields?: KnowledgeWorkOrderLineItemFieldsSettings[];
}

export interface KnowledgeWorkOrderField {
    name?: string[];
}

export interface KnowledgeWorkOrderFieldsSettings {
    field?: KnowledgeWorkOrderField[];
}

export interface KnowledgeWorkOrderLineItemField {
    name?: string[];
}

export interface KnowledgeWorkOrderLineItemFieldsSettings {
    field?: KnowledgeWorkOrderLineItemField[];
}

export interface LanguageSettings extends Metadata {
    enableCanadaIcuFormat?: boolean[];
    enableEndUserLanguages?: boolean[];
    enableICULocaleDateFormat?: boolean[];
    enablePlatformLanguages?: boolean[];
    enableTranslationWorkbench?: boolean[];
    useLanguageFallback?: boolean[];
}

export interface Layout extends Metadata {
    customButtons?: string[];
    customConsoleComponents?: CustomConsoleComponents[];
    emailDefault?: boolean[];
    excludeButtons?: string[];
    feedLayout?: FeedLayout[];
    headers?: LayoutHeader[];
    layoutSections?: LayoutSection[];
    miniLayout?: MiniLayout[];
    multilineLayoutFields?: string[];
    platformActionList?: PlatformActionList[];
    quickActionList?: QuickActionList[];
    relatedContent?: RelatedContent[];
    relatedLists?: RelatedListItem[];
    relatedObjects?: string[];
    runAssignmentRulesDefault?: boolean[];
    showEmailCheckbox?: boolean[];
    showHighlightsPanel?: boolean[];
    showInteractionLogPanel?: boolean[];
    showKnowledgeComponent?: boolean[];
    showRunAssignmentRulesCheckbox?: boolean[];
    showSolutionSection?: boolean[];
    showSubmitAndAttachButton?: boolean[];
    summaryLayout?: SummaryLayout[];
}

export interface LayoutColumn {
    layoutItems?: LayoutItem[];
    reserved?: string[];
}

export interface LayoutItem {
    analyticsCloudComponent?: AnalyticsCloudComponentLayoutItem[];
    behavior?: UiBehavior[];
    canvas?: string[];
    component?: string[];
    customLink?: string[];
    emptySpace?: boolean[];
    field?: string[];
    height?: number[];
    page?: string[];
    reportChartComponent?: ReportChartComponentLayoutItem[];
    scontrol?: string[];
    showLabel?: boolean[];
    showScrollbars?: boolean[];
    width?: string[];
}

export interface LayoutSection {
    customLabel?: boolean[];
    detailHeading?: boolean[];
    editHeading?: boolean[];
    label?: string[];
    layoutColumns?: LayoutColumn[];
    style?: LayoutSectionStyle[];
}

export interface LayoutSectionTranslation {
    label?: string[];
    section?: string[];
}

export interface LayoutTranslation {
    layout?: string[];
    layoutType?: string[];
    sections?: LayoutSectionTranslation[];
}

export interface LeadConfigSettings extends Metadata {
    doesEnableLeadConvertDefaultSubjectBlankTaskCreation?: boolean[];
    doesHideOpportunityInConvertLeadWindow?: boolean[];
    doesPreserveLeadStatus?: boolean[];
    doesSelectNoOpportunityOnConvertLead?: boolean[];
    doesTrackHistory?: boolean[];
    enableConversionsOnMobile?: boolean[];
    enableOrgWideMergeAndDelete?: boolean[];
    shouldLeadConvertRequireValidation?: boolean[];
}

export interface LeadConvertSettings extends Metadata {
    allowOwnerChange?: boolean[];
    objectMapping?: ObjectMapping[];
    opportunityCreationOptions?: VisibleOrRequired[];
}

export interface Letterhead extends Metadata {
    available?: boolean[];
    backgroundColor?: string[];
    bodyColor?: string[];
    bottomLine?: LetterheadLine[];
    description?: string[];
    footer?: LetterheadHeaderFooter[];
    header?: LetterheadHeaderFooter[];
    middleLine?: LetterheadLine[];
    name?: string[];
    topLine?: LetterheadLine[];
}

export interface LetterheadHeaderFooter {
    backgroundColor?: string[];
    height?: number[];
    horizontalAlignment?: LetterheadHorizontalAlignment[];
    logo?: string[];
    verticalAlignment?: LetterheadVerticalAlignment[];
}

export interface LetterheadLine {
    color?: string[];
    height?: number[];
}

export interface LicensedCustomPermissions {
    customPermission?: string[];
    licenseDefinition?: string[];
}

export interface LicenseDefinition extends Metadata {
    aggregationGroup?: string[];
    description?: string[];
    isPublished?: boolean[];
    label?: string[];
    licensedCustomPermissions?: LicensedCustomPermissions[];
    licensingAuthority?: string[];
    licensingAuthorityProvider?: string[];
    minPlatformVersion?: number[];
    origin?: string[];
    revision?: number[];
    trialLicenseDuration?: number[];
    trialLicenseQuantity?: number[];
}

export interface LightningBolt extends Metadata {
    category?: LightningBoltCategory[];
    lightningBoltFeatures?: LightningBoltFeatures[];
    lightningBoltImages?: LightningBoltImages[];
    lightningBoltItems?: LightningBoltItems[];
    masterLabel?: string[];
    publisher?: string[];
    summary?: string[];
}

export interface LightningBoltFeatures {
    description?: string[];
    order?: number[];
    title?: string[];
}

export interface LightningBoltImages {
    image?: string[];
    order?: number[];
}

export interface LightningBoltItems {
    name?: string[];
    type?: string[];
}

export interface LightningComponentBundle extends Metadata {
    apiVersion?: number[];
    description?: string[];
    isExplicitImport?: boolean[];
    isExposed?: boolean[];
    lwcResources?: LwcResources[];
    masterLabel?: string[];
    runtimeNamespace?: string[];
    targetConfigs?: any[];
    targets?: Targets[];
}

export interface LightningExperienceSettings extends Metadata {
    enableAccessCheckCrucPref?: boolean[];
    enableApiUserLtngOutAccessPref?: boolean[];
    enableAuraCDNPref?: boolean[];
    enableFeedbackInMobile?: boolean[];
    enableIE11DeprecationMsgHidden?: boolean[];
    enableIE11LEXCrucPref?: boolean[];
    enableInAppTooltips?: boolean[];
    enableLEXOnIpadEnabled?: boolean[];
    enableLexEndUsersNoSwitching?: boolean[];
    enableNavPersonalizationOptOut?: boolean[];
    enableRemoveThemeBrandBanner?: boolean[];
    enableS1BannerPref?: boolean[];
    enableS1BrowserEnabled?: boolean[];
    enableS1DesktopEnabled?: boolean[];
    enableS1UiLoggingEnabled?: boolean[];
    enableTryLightningOptOut?: boolean[];
    enableUseS1AlohaDesktop?: boolean[];
    enableUsersAreLightningOnly?: boolean[];
}

export interface LightningExperienceTheme extends Metadata {
    defaultBrandingSet?: string[];
    description?: string[];
    masterLabel?: string[];
    shouldOverrideLoadingImage?: boolean[];
}

export interface LightningMessageChannel extends Metadata {
    description?: string[];
    isExposed?: boolean[];
    lightningMessageFields?: LightningMessageField[];
    masterLabel?: string[];
}

export interface LightningMessageField {
    description?: string[];
    fieldName?: string[];
}

export interface LightningOnboardingConfig extends Metadata {
    collaborationGroup?: string[];
    customQuestion?: string[];
    feedbackFormDaysFrequency?: number[];
    isCustom?: boolean[];
    masterLabel?: string[];
    sendFeedbackToSalesforce?: boolean[];
}

export interface ListMetadataQuery {
    folder?: string[];
    type?: string[];
}

export interface ListPlacement {
    height?: number[];
    location?: string[];
    units?: string[];
    width?: number[];
}

export interface ListView extends Metadata {
    booleanFilter?: string[];
    columns?: string[];
    division?: string[];
    filterScope?: FilterScope[];
    filters?: ListViewFilter[];
    label?: string[];
    language?: Language[];
    queue?: string[];
    sharedTo?: SharedTo[];
}

export interface ListViewFilter {
    field?: string[];
    operation?: FilterOperation[];
    value?: string[];
}

export interface LiveAgentConfig {
    enableLiveChat?: boolean[];
    openNewAccountSubtab?: boolean[];
    openNewCaseSubtab?: boolean[];
    openNewContactSubtab?: boolean[];
    openNewLeadSubtab?: boolean[];
    openNewVFPageSubtab?: boolean[];
    pageNamesToOpen?: string[];
    showKnowledgeArticles?: boolean[];
}

export interface LiveAgentSettings extends Metadata {
    enableLiveAgent?: boolean[];
    enableQuickTextEnabled?: boolean[];
}

export interface LiveChatAgentConfig extends Metadata {
    assignments?: AgentConfigAssignments[];
    autoGreeting?: string[];
    capacity?: number[];
    criticalWaitTime?: number[];
    customAgentName?: string[];
    enableAgentFileTransfer?: boolean[];
    enableAgentSneakPeek?: boolean[];
    enableAssistanceFlag?: boolean[];
    enableAutoAwayOnDecline?: boolean[];
    enableAutoAwayOnPushTimeout?: boolean[];
    enableChatConferencing?: boolean[];
    enableChatMonitoring?: boolean[];
    enableChatTransferToAgent?: boolean[];
    enableChatTransferToButton?: boolean[];
    enableChatTransferToSkill?: boolean[];
    enableLogoutSound?: boolean[];
    enableNotifications?: boolean[];
    enableRequestSound?: boolean[];
    enableSneakPeek?: boolean[];
    enableVisitorBlocking?: boolean[];
    enableWhisperMessage?: boolean[];
    label?: string[];
    supervisorDefaultAgentStatusFilter?: SupervisorAgentStatusFilter[];
    supervisorDefaultButtonFilter?: string[];
    supervisorDefaultSkillFilter?: string[];
    supervisorSkills?: SupervisorAgentConfigSkills[];
    transferableButtons?: AgentConfigButtons[];
    transferableSkills?: AgentConfigSkills[];
}

export interface LiveChatButton extends Metadata {
    animation?: LiveChatButtonPresentation[];
    autoGreeting?: string[];
    chasitorIdleTimeout?: number[];
    chasitorIdleTimeoutWarning?: number[];
    chatPage?: string[];
    customAgentName?: string[];
    deployments?: LiveChatButtonDeployments[];
    enableQueue?: boolean[];
    inviteEndPosition?: LiveChatButtonInviteEndPosition[];
    inviteImage?: string[];
    inviteStartPosition?: LiveChatButtonInviteStartPosition[];
    isActive?: boolean[];
    label?: string[];
    numberOfReroutingAttempts?: number[];
    offlineImage?: string[];
    onlineImage?: string[];
    optionsCustomRoutingIsEnabled?: boolean[];
    optionsHasChasitorIdleTimeout?: boolean[];
    optionsHasInviteAfterAccept?: boolean[];
    optionsHasInviteAfterReject?: boolean[];
    optionsHasRerouteDeclinedRequest?: boolean[];
    optionsIsAutoAccept?: boolean[];
    optionsIsInviteAutoRemove?: boolean[];
    overallQueueLength?: number[];
    perAgentQueueLength?: number[];
    postChatPage?: string[];
    postChatUrl?: string[];
    preChatFormPage?: string[];
    preChatFormUrl?: string[];
    pushTimeOut?: number[];
    routingType?: LiveChatButtonRoutingType[];
    site?: string[];
    skills?: LiveChatButtonSkills[];
    timeToRemoveInvite?: number[];
    type?: LiveChatButtonType[];
    windowLanguage?: Language[];
}

export interface LiveChatButtonDeployments {
    deployment?: string[];
}

export interface LiveChatButtonSkills {
    skill?: string[];
}

export interface LiveChatDeployment extends Metadata {
    brandingImage?: string[];
    connectionTimeoutDuration?: number[];
    connectionWarningDuration?: number[];
    displayQueuePosition?: boolean[];
    domainWhiteList?: LiveChatDeploymentDomainWhitelist[];
    enablePrechatApi?: boolean[];
    enableTranscriptSave?: boolean[];
    label?: string[];
    mobileBrandingImage?: string[];
    site?: string[];
    windowTitle?: string[];
}

export interface LiveChatDeploymentDomainWhitelist {
    domain?: string[];
}

export interface LiveChatSensitiveDataRule extends Metadata {
    actionType?: SensitiveDataActionType[];
    description?: string[];
    enforceOn?: number[];
    isEnabled?: boolean[];
    pattern?: string[];
    priority?: number[];
    replacement?: string[];
}

export interface LiveMessageSettings extends Metadata {
    enableLiveMessage?: boolean[];
}

export interface LocalMlDomain {
    label?: string[];
    mlIntents?: MlIntent[];
    mlSlotClasses?: MlSlotClass[];
    name?: string[];
}

export interface LogInfo {
    category?: LogCategory[];
    level?: LogCategoryLevel[];
}

export interface LookupFilter {
    active?: boolean[];
    booleanFilter?: string[];
    description?: string[];
    errorMessage?: string[];
    filterItems?: FilterItem[];
    infoMessage?: string[];
    isOptional?: boolean[];
}

export interface LookupFilterTranslation {
    errorMessage?: string[];
    informationalMessage?: string[];
}

export interface LwcResource {
    filePath?: string[];
    source?: any[];
}

export interface LwcResources {
    lwcResource?: LwcResource[];
}

export interface MacroSettings extends Metadata {
    enableAdvancedSearch?: boolean[];
    macrosInFolders?: boolean[];
}

export interface ManagedContentNodeType {
    helpText?: string[];
    isLocalizable?: boolean[];
    isRequired?: boolean[];
    nodeLabel?: string[];
    nodeName?: string[];
    nodeType?: MCNodeType[];
    placeholderText?: string[];
}

export interface ManagedContentType extends Metadata {
    description?: string[];
    developerName?: string[];
    managedContentNodeTypes?: ManagedContentNodeType[];
    masterLabel?: string[];
}

export interface ManagedTopic extends Metadata {
    managedTopicType?: string[];
    name?: string[];
    parentName?: string[];
    position?: number[];
    topicDescription?: string[];
}

export interface ManagedTopics extends Metadata {
    managedTopic?: ManagedTopic[];
}

export interface MapExpression {
    expression?: string[];
    name?: string[];
    type?: string[];
}

export interface MapsAndLocationSettings extends Metadata {
    enableAddressAutoComplete?: boolean[];
    enableMapsAndLocation?: boolean[];
}

export interface MatchingRule extends Metadata {
    booleanFilter?: string[];
    description?: string[];
    label?: string[];
    matchingRuleItems?: MatchingRuleItem[];
    ruleStatus?: MatchingRuleStatus[];
}

export interface MatchingRuleItem {
    blankValueBehavior?: BlankValueBehavior[];
    fieldName?: string[];
    matchingMethod?: MatchingMethod[];
}

export interface MatchingRules extends Metadata {
    matchingRules?: MatchingRule[];
}

export interface Metadata {
    fullName?: string[];
}

export interface MetadataWithContent extends Metadata {
    content?: any[];
}

export interface MilestoneType extends Metadata {
    description?: string[];
    recurrenceType?: MilestoneTypeRecurrenceType[];
}

export interface MiniLayout {
    fields?: string[];
    relatedLists?: RelatedListItem[];
}

export interface MlDomain extends Metadata {
    description?: string[];
    label?: string[];
    mlIntents?: MlIntent[];
    mlSlotClasses?: MlSlotClass[];
}

export interface MlIntent {
    description?: string[];
    developerName?: string[];
    label?: string[];
    mlIntentUtterances?: MlIntentUtterance[];
    relatedMlIntents?: MlRelatedIntent[];
}

export interface MlIntentUtterance {
    utterance?: string[];
}

export interface MlRelatedIntent {
    relatedMlIntent?: string[];
}

export interface MlSlotClass {
    dataType?: MlSlotClassDataType[];
    description?: string[];
    developerName?: string[];
    extractionRegex?: string[];
    extractionType?: MlSlotClassExtractionType[];
    label?: string[];
    mlSlotClassValues?: MlSlotClassValue[];
}

export interface MlSlotClassValue {
    synonymGroup?: SynonymGroup[];
    value?: string[];
}

export interface MobileApplicationDetail extends Metadata {
    applicationBinaryFile?: any[];
    applicationBinaryFileName?: string[];
    applicationBundleIdentifier?: string[];
    applicationFileLength?: number[];
    applicationIconFile?: string[];
    applicationIconFileName?: string[];
    applicationInstallUrl?: string[];
    devicePlatform?: DevicePlatformType[];
    deviceType?: string[];
    minimumOsVersion?: string[];
    privateApp?: boolean[];
    version?: string[];
}

export interface MobileSettings extends Metadata {
    dashboardMobile?: DashboardMobileSettings[];
    enableImportContactFromDevice?: boolean[];
    enableLightningOnMobile?: boolean[];
    enableOfflineDraftsEnabled?: boolean[];
    enablePopulateNameManuallyInToday?: boolean[];
    enableS1EncryptedStoragePref2?: boolean[];
    enableS1OfflinePref?: boolean[];
}

export interface ModeratedEntityField {
    entityName?: string[];
    fieldName?: string[];
    keywordList?: string[];
}

export interface ModerationRule extends Metadata {
    action?: ModerationRuleAction[];
    actionLimit?: number[];
    active?: boolean[];
    description?: string[];
    entitiesAndFields?: ModeratedEntityField[];
    masterLabel?: string[];
    notifyLimit?: number[];
    timePeriod?: RateLimitTimePeriod[];
    type?: ModerationRuleType[];
    userCriteria?: string[];
    userMessage?: string[];
}

export interface MutingPermissionSet extends PermissionSet {
    label?: string[];
}

export interface MyDomainSettings extends Metadata {
    canOnlyLoginWithMyDomainUrl?: boolean[];
    doesApiLoginRequireOrgDomain?: boolean[];
    enableNativeBrowserForAuthOnAndroid?: boolean[];
    enableNativeBrowserForAuthOnIos?: boolean[];
    useStabilizedMyDomainHostnames?: boolean[];
    useStabilizedSandboxMyDomainHostnames?: boolean[];
}

export interface NamedCredential extends Metadata {
    allowMergeFieldsInBody?: boolean[];
    allowMergeFieldsInHeader?: boolean[];
    authProvider?: string[];
    authTokenEndpointUrl?: string[];
    awsAccessKey?: string[];
    awsAccessSecret?: string[];
    awsRegion?: string[];
    awsService?: string[];
    certificate?: string[];
    endpoint?: string[];
    generateAuthorizationHeader?: boolean[];
    jwtAudience?: string[];
    jwtFormulaSubject?: string[];
    jwtIssuer?: string[];
    jwtSigningCertificate?: string[];
    jwtTextSubject?: string[];
    jwtValidityPeriodSeconds?: number[];
    label?: string[];
    oauthRefreshToken?: string[];
    oauthScope?: string[];
    oauthToken?: string[];
    password?: string[];
    principalType?: ExternalPrincipalType[];
    privateConnection?: string[];
    protocol?: AuthenticationProtocol[];
    username?: string[];
}

export interface NameSettings extends Metadata {
    enableMiddleName?: boolean[];
    enableNameSuffix?: boolean[];
}

export interface NavigationLinkSet {
    navigationMenuItem?: NavigationMenuItem[];
}

export interface NavigationMenu extends Metadata {
    container?: string[];
    containerType?: string[];
    label?: string[];
    navigationMenuItem?: NavigationMenuItem[];
}

export interface NavigationMenuItem {
    defaultListViewId?: string[];
    label?: string[];
    menuItemBranding?: NavigationMenuItemBranding[];
    position?: number[];
    publiclyAvailable?: boolean[];
    subMenu?: NavigationSubMenu[];
    target?: string[];
    targetPreference?: string[];
    type?: string[];
}

export interface NavigationMenuItemBranding {
    tileImage?: string[];
}

export interface NavigationSubMenu {
    navigationMenuItem?: NavigationMenuItem[];
}

export interface Network extends Metadata {
    allowInternalUserLogin?: boolean[];
    allowMembersToFlag?: boolean[];
    allowedExtensions?: string[];
    caseCommentEmailTemplate?: string[];
    changePasswordTemplate?: string[];
    communityRoles?: CommunityRoles[];
    description?: string[];
    disableReputationRecordConversations?: boolean[];
    emailFooterLogo?: string[];
    emailFooterText?: string[];
    emailSenderAddress?: string[];
    emailSenderName?: string[];
    enableCustomVFErrorPageOverrides?: boolean[];
    enableDirectMessages?: boolean[];
    enableGuestChatter?: boolean[];
    enableGuestFileAccess?: boolean[];
    enableGuestMemberVisibility?: boolean[];
    enableInvitation?: boolean[];
    enableKnowledgeable?: boolean[];
    enableMemberVisibility?: boolean[];
    enableNicknameDisplay?: boolean[];
    enablePrivateMessages?: boolean[];
    enableReputation?: boolean[];
    enableShowAllNetworkSettings?: boolean[];
    enableSiteAsContainer?: boolean[];
    enableTalkingAboutStats?: boolean[];
    enableTopicAssignmentRules?: boolean[];
    enableTopicSuggestions?: boolean[];
    enableUpDownVote?: boolean[];
    feedChannel?: string[];
    forgotPasswordTemplate?: string[];
    gatherCustomerSentimentData?: boolean[];
    lockoutTemplate?: string[];
    logoutUrl?: string[];
    maxFileSizeKb?: number[];
    navigationLinkSet?: NavigationLinkSet[];
    networkMemberGroups?: NetworkMemberGroup[];
    networkPageOverrides?: NetworkPageOverride[];
    newSenderAddress?: string[];
    picassoSite?: string[];
    recommendationAudience?: RecommendationAudience[];
    recommendationDefinition?: RecommendationDefinition[];
    reputationLevels?: ReputationLevelDefinitions[];
    reputationPointsRules?: ReputationPointsRules[];
    selfRegProfile?: string[];
    selfRegistration?: boolean[];
    sendWelcomeEmail?: boolean[];
    site?: string[];
    status?: NetworkStatus[];
    tabs?: NetworkTabSet[];
    urlPathPrefix?: string[];
    verificationTemplate?: string[];
    welcomeTemplate?: string[];
}

export interface NetworkAccess {
    ipRanges?: IpRange[];
}

export interface NetworkBranding extends MetadataWithContent {
    loginBackgroundImageUrl?: string[];
    loginFooterText?: string[];
    loginLogo?: string[];
    loginLogoName?: string[];
    loginPrimaryColor?: string[];
    loginQuaternaryColor?: string[];
    loginRightFrameUrl?: string[];
    network?: string[];
    pageFooter?: string[];
    pageHeader?: string[];
    primaryColor?: string[];
    primaryComplementColor?: string[];
    quaternaryColor?: string[];
    quaternaryComplementColor?: string[];
    secondaryColor?: string[];
    staticLogoImageUrl?: string[];
    tertiaryColor?: string[];
    tertiaryComplementColor?: string[];
    zeronaryColor?: string[];
    zeronaryComplementColor?: string[];
}

export interface NetworkMemberGroup {
    permissionSet?: string[];
    profile?: string[];
}

export interface NetworkPageOverride {
    changePasswordPageOverrideSetting?: NetworkPageOverrideSetting[];
    forgotPasswordPageOverrideSetting?: NetworkPageOverrideSetting[];
    homePageOverrideSetting?: NetworkPageOverrideSetting[];
    loginPageOverrideSetting?: NetworkPageOverrideSetting[];
    selfRegProfilePageOverrideSetting?: NetworkPageOverrideSetting[];
}

export interface NetworkTabSet {
    customTab?: string[];
    defaultTab?: string[];
    standardTab?: string[];
}

export interface NextAutomatedApprover {
    useApproverFieldOfRecordOwner?: boolean[];
    userHierarchyField?: string[];
}

export interface NotificationsSettings extends Metadata {
    enableMobileAppPushNotifications?: boolean[];
    enableNotifications?: boolean[];
}

export interface OauthCustomScope extends Metadata {
    description?: string[];
    developerName?: string[];
    isProtected?: boolean[];
    isPublic?: boolean[];
    masterLabel?: string[];
}

export interface ObjectLinkingSettings extends Metadata {
    enableObjectLinking?: boolean[];
}

export interface ObjectMapping {
    inputObject?: string[];
    mappingFields?: ObjectMappingField[];
    outputObject?: string[];
}

export interface ObjectMappingField {
    inputField?: string[];
    outputField?: string[];
}

export interface ObjectNameCaseValue {
    article?: Article[];
    caseType?: CaseType[];
    plural?: boolean[];
    possessive?: Possessive[];
    value?: string[];
}

export interface ObjectRelationship {
    join?: ObjectRelationship[];
    outerJoin?: boolean[];
    relationship?: string[];
}

export interface ObjectSearchSetting {
    enhancedLookupEnabled?: boolean[];
    lookupAutoCompleteEnabled?: boolean[];
    name?: string[];
    resultsPerPageCount?: number[];
}

export interface ObjectUsage {
    object?: string[];
}

export interface OmniChannelSettings extends Metadata {
    enableOmniAutoLoginPrompt?: boolean[];
    enableOmniChannel?: boolean[];
    enableOmniSecondaryRoutingPriority?: boolean[];
    enableOmniSkillsRouting?: boolean[];
}

export interface OpportunityListFieldsLabelMapping {
    field?: string[];
    label?: string[];
}

export interface OpportunityListFieldsSelectedSettings {
    field?: string[];
}

export interface OpportunityListFieldsUnselectedSettings {
    field?: string[];
}

export interface OpportunitySettings extends Metadata {
    autoActivateNewReminders?: boolean[];
    customizableProductSchedulesEnabled?: boolean[];
    doesAutoAddSplitOwnerAsOpportunityTeamMember?: boolean[];
    doesEnforceStandardOpportunitySaveLogic?: boolean[];
    enableFindSimilarOpportunities?: boolean[];
    enableOpportunityFieldHistoryTracking?: boolean[];
    enableOpportunityInsightsInMobile?: boolean[];
    enableOpportunityTeam?: boolean[];
    enableUpdateReminders?: boolean[];
    findSimilarOppFilter?: FindSimilarOppFilter[];
    promptToAddProducts?: boolean[];
}

export interface Orchestration extends MetadataWithContent {
    context?: string[];
    masterLabel?: string[];
}

export interface OrchestrationContext extends Metadata {
    datasets?: OrchestrationContextDataset[];
    description?: string[];
    events?: OrchestrationContextEvent[];
    imageFile?: string[];
    imageScale?: number[];
    masterLabel?: string[];
    runtimeType?: string[];
    salesforceObject?: string[];
    salesforceObjectPrimaryKey?: string[];
}

export interface OrchestrationContextDataset {
    datasetType?: string[];
    orchestrationDataset?: string[];
}

export interface OrchestrationContextEvent {
    eventType?: string[];
    orchestrationEvent?: string[];
    platformEvent?: string[];
    platformEventPrimaryKey?: string[];
}

export interface OrderManagementSettings extends Metadata {
    enableOrderManagement?: boolean[];
}

export interface OrderSettings extends Metadata {
    enableNegativeQuantity?: boolean[];
    enableOrders?: boolean[];
    enableReductionOrders?: boolean[];
    enableZeroQuantity?: boolean[];
}

export interface OrganizationSettingsDetail {
    settingName?: string[];
    settingValue?: boolean[];
}

export interface OrgPreferenceSettings extends Metadata {
    preferences?: OrganizationSettingsDetail[];
}

export interface OrgSettings extends Metadata {
    enableCustomerSuccessPortal?: boolean[];
    enableExtendedMailMerge?: boolean[];
    enableIncludeContractStatus?: boolean[];
    enableMakeDeploymentsMandatory?: boolean[];
    enableManageSelfServiceUsers?: boolean[];
    enableOrgFeedSentimentAnalysis?: boolean[];
    enableRADeploymentAttributeOnly?: boolean[];
    enableResetDivisionOnLogin?: boolean[];
    saveMailMergeDocsAsSalesforceDocs?: boolean[];
}

export interface Package extends Metadata {
    apiAccessLevel?: APIAccessLevel[];
    description?: string[];
    namespacePrefix?: string[];
    objectPermissions?: ProfileObjectPermissions[];
    packageType?: string[];
    postInstallClass?: string[];
    setupWeblink?: string[];
    types?: PackageTypeMembers[];
    uninstallClass?: string[];
    version?: string[];
}

export interface PackageTypeMembers {
    members?: string[];
    name?: string[];
}

export interface PackageVersion {
    majorNumber?: number[];
    minorNumber?: number[];
    namespace?: string[];
}

export interface PardotEinsteinSettings extends Metadata {
    enableCampaignInsight?: boolean[];
    enableEngagementScore?: boolean[];
}

export interface PardotSettings extends Metadata {
    enableB2bmaAppEnabled?: boolean[];
    enableEngagementHistoryDashboards?: boolean[];
    enablePardotAppV1Enabled?: boolean[];
    enablePardotEnabled?: boolean[];
    enableProspectActivityDataset?: boolean[];
}

export interface PartyDataModelSettings extends Metadata {
    enableAutoSelectIndividualOnMerge?: boolean[];
    enableConsentManagement?: boolean[];
}

export interface PasswordPolicies {
    apiOnlyUserHomePageURL?: string[];
    complexity?: Complexity[];
    enableSetPasswordInApi?: boolean[];
    expiration?: Expiration[];
    historyRestriction?: string[];
    lockoutInterval?: LockoutInterval[];
    maxLoginAttempts?: MaxLoginAttempts[];
    minimumPasswordLength?: string[];
    minimumPasswordLifetime?: boolean[];
    obscureSecretAnswer?: boolean[];
    passwordAssistanceMessage?: string[];
    passwordAssistanceURL?: string[];
    questionRestriction?: QuestionRestriction[];
}

export interface PathAssistant extends Metadata {
    active?: boolean[];
    entityName?: string[];
    fieldName?: string[];
    masterLabel?: string[];
    pathAssistantSteps?: PathAssistantStep[];
    recordTypeName?: string[];
}

export interface PathAssistantSettings extends Metadata {
    canOverrideAutoPathCollapseWithUserPref?: boolean[];
    pathAssistantEnabled?: boolean[];
}

export interface PathAssistantStep {
    fieldNames?: string[];
    info?: string[];
    picklistValueName?: string[];
}

export interface PermissionSet extends Metadata {
    applicationVisibilities?: PermissionSetApplicationVisibility[];
    classAccesses?: PermissionSetApexClassAccess[];
    customMetadataTypeAccesses?: PermissionSetCustomMetadataTypeAccess[];
    customPermissions?: PermissionSetCustomPermissions[];
    description?: string[];
    externalDataSourceAccesses?: PermissionSetExternalDataSourceAccess[];
    fieldPermissions?: PermissionSetFieldPermissions[];
    flowAccesses?: PermissionSetFlowAccess[];
    hasActivationRequired?: boolean[];
    label?: string[];
    license?: string[];
    objectPermissions?: PermissionSetObjectPermissions[];
    pageAccesses?: PermissionSetApexPageAccess[];
    recordTypeVisibilities?: PermissionSetRecordTypeVisibility[];
    tabSettings?: PermissionSetTabSetting[];
    userPermissions?: PermissionSetUserPermission[];
}

export interface PermissionSetApexClassAccess {
    apexClass?: string[];
    enabled?: boolean[];
}

export interface PermissionSetApexPageAccess {
    apexPage?: string[];
    enabled?: boolean[];
}

export interface PermissionSetApplicationVisibility {
    application?: string[];
    visible?: boolean[];
}

export interface PermissionSetCustomMetadataTypeAccess {
    enabled?: boolean[];
    name?: string[];
}

export interface PermissionSetCustomPermissions {
    enabled?: boolean[];
    name?: string[];
}

export interface PermissionSetExternalDataSourceAccess {
    enabled?: boolean[];
    externalDataSource?: string[];
}

export interface PermissionSetFieldPermissions {
    editable?: boolean[];
    field?: string[];
    readable?: boolean[];
}

export interface PermissionSetFlowAccess {
    enabled?: boolean[];
    flow?: string[];
}

export interface PermissionSetGroup extends Metadata {
    description?: string[];
    label?: string[];
    mutingPermissionSets?: string[];
    permissionSets?: string[];
    status?: string[];
}

export interface PermissionSetObjectPermissions {
    allowCreate?: boolean[];
    allowDelete?: boolean[];
    allowEdit?: boolean[];
    allowRead?: boolean[];
    modifyAllRecords?: boolean[];
    object?: string[];
    viewAllRecords?: boolean[];
}

export interface PermissionSetRecordTypeVisibility {
    recordType?: string[];
    visible?: boolean[];
}

export interface PermissionSetTabSetting {
    tab?: string[];
    visibility?: PermissionSetTabVisibility[];
}

export interface PermissionSetUserPermission {
    enabled?: boolean[];
    name?: string[];
}

export interface PersonalizationTargetInfo {
    groupName?: string[];
    priority?: number[];
    targetType?: string[];
    targetValue?: string[];
}

export interface PersonalizationTargetInfos {
    target?: PersonalizationTargetInfo[];
}

export interface PersonListSettings extends Metadata {
    enablePersonList?: boolean[];
}

export interface PicklistEntry {
    active?: boolean[];
    defaultValue?: boolean[];
    label?: string[];
    validFor?: string[];
    value?: string[];
}

export interface PicklistSettings extends Metadata {
    isPicklistApiNameEditDisabled?: boolean[];
}

export interface PicklistValue extends Metadata {
    color?: string[];
    default?: boolean[];
    description?: string[];
    isActive?: boolean[];
    allowEmail?: boolean[];
    closed?: boolean[];
    controllingFieldValues?: string[];
    converted?: boolean[];
    cssExposed?: boolean[];
    forecastCategory?: ForecastCategories[];
    highPriority?: boolean[];
    probability?: number[];
    reverseRole?: string[];
    reviewed?: boolean[];
    won?: boolean[];
}

export interface PicklistValueTranslation {
    masterLabel?: string[];
    translation?: string[];
}

export interface PlatformActionList extends Metadata {
    actionListContext?: PlatformActionListContext[];
    platformActionListItems?: PlatformActionListItem[];
    relatedSourceEntity?: string[];
}

export interface PlatformActionListItem {
    actionName?: string[];
    actionType?: PlatformActionType[];
    sortOrder?: number[];
    subtype?: string[];
}

export interface PlatformCachePartition extends Metadata {
    description?: string[];
    isDefaultPartition?: boolean[];
    masterLabel?: string[];
    platformCachePartitionTypes?: PlatformCachePartitionType[];
}

export interface PlatformCachePartitionType {
    allocatedCapacity?: number[];
    allocatedPurchasedCapacity?: number[];
    allocatedTrialCapacity?: number[];
    cacheType?: PlatformCacheType[];
}

export interface PlatformEncryptionSettings extends Metadata {
    canEncryptManagedPackageFields?: boolean[];
    enableDeterministicEncryption?: boolean[];
    enableEncryptFieldHistory?: boolean[];
    enableEventBusEncryption?: boolean[];
    isMEKForEncryptionRequired?: boolean[];
    isUseHighAssuranceKeysRequired?: boolean[];
}

export interface PlatformEventChannel extends Metadata {
    channelType?: PlatformEventChannelType[];
    label?: string[];
}

export interface PlatformEventChannelMember extends Metadata {
    eventChannel?: string[];
    selectedEntity?: string[];
}

export interface Portal extends Metadata {
    active?: boolean[];
    admin?: string[];
    defaultLanguage?: string[];
    description?: string[];
    emailSenderAddress?: string[];
    emailSenderName?: string[];
    enableSelfCloseCase?: boolean[];
    footerDocument?: string[];
    forgotPassTemplate?: string[];
    headerDocument?: string[];
    isSelfRegistrationActivated?: boolean[];
    loginHeaderDocument?: string[];
    logoDocument?: string[];
    logoutUrl?: string[];
    newCommentTemplate?: string[];
    newPassTemplate?: string[];
    newUserTemplate?: string[];
    ownerNotifyTemplate?: string[];
    selfRegNewUserUrl?: string[];
    selfRegUserDefaultProfile?: string[];
    selfRegUserDefaultRole?: PortalRoles[];
    selfRegUserTemplate?: string[];
    showActionConfirmation?: boolean[];
    stylesheetDocument?: string[];
    type?: PortalType[];
}

export interface PostTemplate extends Metadata {
    default?: boolean[];
    description?: string[];
    fields?: string[];
    label?: string[];
}

export interface PresenceConfigAssignments {
    profiles?: PresenceConfigProfileAssignments[];
    users?: PresenceConfigUserAssignments[];
}

export interface PresenceConfigProfileAssignments {
    profile?: string[];
}

export interface PresenceConfigUserAssignments {
    user?: string[];
}

export interface PresenceDeclineReason extends Metadata {
    label?: string[];
}

export interface PresenceUserConfig extends Metadata {
    assignments?: PresenceConfigAssignments[];
    capacity?: number[];
    declineReasons?: string[];
    enableAutoAccept?: boolean[];
    enableDecline?: boolean[];
    enableDeclineReason?: boolean[];
    enableDisconnectSound?: boolean[];
    enableRequestSound?: boolean[];
    label?: string[];
    presenceStatusOnDecline?: string[];
    presenceStatusOnPushTimeout?: string[];
}

export interface PrimaryTabComponents {
    containers?: Container[];
}

export interface PrivacySettings extends Metadata {
    enableConsentAuditTrail?: boolean[];
    enableConsentEventStream?: boolean[];
    enableDefaultMetadataValues?: boolean[];
}

export interface PrivateConnection extends Metadata {
    description?: string[];
    direction?: PrivateConnectionDirection[];
    externalConnectionProperties?: ExternalConnectionProperty[];
    label?: string[];
    status?: PrivateConnectionStatus[];
    type?: PrivateConnectionType[];
}

export interface ProductSettings extends Metadata {
    enableCascadeActivateToRelatedPrices?: boolean[];
    enableMySettings?: boolean[];
    enableQuantitySchedule?: boolean[];
    enableRevenueSchedule?: boolean[];
}

export interface Profile extends Metadata {
    applicationVisibilities?: ProfileApplicationVisibility[];
    categoryGroupVisibilities?: ProfileCategoryGroupVisibility[];
    classAccesses?: ProfileApexClassAccess[];
    custom?: boolean[];
    customMetadataTypeAccesses?: ProfileCustomMetadataTypeAccess[];
    customPermissions?: ProfileCustomPermissions[];
    description?: string[];
    externalDataSourceAccesses?: ProfileExternalDataSourceAccess[];
    fieldPermissions?: ProfileFieldLevelSecurity[];
    flowAccesses?: ProfileFlowAccess[];
    layoutAssignments?: ProfileLayoutAssignment[];
    loginHours?: ProfileLoginHours[];
    loginIpRanges?: ProfileLoginIpRange[];
    objectPermissions?: ProfileObjectPermissions[];
    pageAccesses?: ProfileApexPageAccess[];
    profileActionOverrides?: ProfileActionOverride[];
    recordTypeVisibilities?: ProfileRecordTypeVisibility[];
    tabVisibilities?: ProfileTabVisibility[];
    userLicense?: string[];
    userPermissions?: ProfileUserPermission[];
}

export interface ProfileActionOverride {
    actionName?: string[];
    content?: string[];
    formFactor?: FormFactor[];
    pageOrSobjectType?: string[];
    recordType?: string[];
    type?: ActionOverrideType[];
}

export interface ProfileApexClassAccess {
    apexClass?: string[];
    enabled?: boolean[];
}

export interface ProfileApexPageAccess {
    apexPage?: string[];
    enabled?: boolean[];
}

export interface ProfileApplicationVisibility {
    application?: string[];
    default?: boolean[];
    visible?: boolean[];
}

export interface ProfileCategoryGroupVisibility {
    dataCategories?: string[];
    dataCategoryGroup?: string[];
    visibility?: CategoryGroupVisibility[];
}

export interface ProfileCustomMetadataTypeAccess {
    enabled?: boolean[];
    name?: string[];
}

export interface ProfileCustomPermissions {
    enabled?: boolean[];
    name?: string[];
}

export interface ProfileExternalDataSourceAccess {
    enabled?: boolean[];
    externalDataSource?: string[];
}

export interface ProfileFieldLevelSecurity {
    editable?: boolean[];
    field?: string[];
    readable?: boolean[];
}

export interface ProfileFlowAccess {
    enabled?: boolean[];
    flow?: string[];
}

export interface ProfileLayoutAssignment {
    layout?: string[];
    recordType?: string[];
}

export interface ProfileLoginHours {
    fridayEnd?: string[];
    fridayStart?: string[];
    mondayEnd?: string[];
    mondayStart?: string[];
    saturdayEnd?: string[];
    saturdayStart?: string[];
    sundayEnd?: string[];
    sundayStart?: string[];
    thursdayEnd?: string[];
    thursdayStart?: string[];
    tuesdayEnd?: string[];
    tuesdayStart?: string[];
    wednesdayEnd?: string[];
    wednesdayStart?: string[];
}

export interface ProfileLoginIpRange {
    description?: string[];
    endAddress?: string[];
    startAddress?: string[];
}

export interface ProfileObjectPermissions {
    allowCreate?: boolean[];
    allowDelete?: boolean[];
    allowEdit?: boolean[];
    allowRead?: boolean[];
    modifyAllRecords?: boolean[];
    object?: string[];
    viewAllRecords?: boolean[];
}

export interface ProfilePasswordPolicy extends Metadata {
    forgotPasswordRedirect?: boolean[];
    lockoutInterval?: number[];
    maxLoginAttempts?: number[];
    minimumPasswordLength?: number[];
    minimumPasswordLifetime?: boolean[];
    obscure?: boolean[];
    passwordComplexity?: number[];
    passwordExpiration?: number[];
    passwordHistory?: number[];
    passwordQuestion?: number[];
    profile?: string[];
}

export interface ProfileRecordTypeVisibility {
    default?: boolean[];
    personAccountDefault?: boolean[];
    recordType?: string[];
    visible?: boolean[];
}

export interface ProfileSearchLayouts {
    fields?: string[];
    profileName?: string[];
}

export interface ProfileSessionSetting extends Metadata {
    externalCommunityUserIdentityVerif?: boolean[];
    forceLogout?: boolean[];
    profile?: string[];
    requiredSessionLevel?: SessionSecurityLevel[];
    sessionPersistence?: boolean[];
    sessionTimeout?: number[];
    sessionTimeoutWarning?: boolean[];
}

export interface ProfileTabVisibility {
    tab?: string[];
    visibility?: TabVisibility[];
}

export interface ProfileUserPermission {
    enabled?: boolean[];
    name?: string[];
}

export interface Prompt extends Metadata {
    masterLabel?: string[];
    promptVersions?: PromptVersion[];
}

export interface PromptVersion {
    actionButtonLabel?: string[];
    actionButtonLink?: string[];
    body?: string[];
    customApplication?: string[];
    delayDays?: number[];
    description?: string[];
    dismissButtonLabel?: string[];
    displayPosition?: PromptDisplayPosition[];
    displayType?: PromptDisplayType[];
    endDate?: string[];
    header?: string[];
    indexWithIsPublished?: string[];
    indexWithoutIsPublished?: string[];
    isPublished?: boolean[];
    masterLabel?: string[];
    publishedByUser?: string[];
    publishedDate?: string[];
    shouldDisplayActionButton?: boolean[];
    startDate?: string[];
    targetAppDeveloperName?: string[];
    targetAppNamespacePrefix?: string[];
    targetPageKey1?: string[];
    targetPageKey2?: string[];
    targetPageType?: string[];
    timesToDisplay?: number[];
    title?: string[];
    uiFormulaRule?: UiFormulaRule[];
    userAccess?: PromptUserAccess[];
    versionNumber?: number[];
}

export interface PublicGroups {
    publicGroup?: string[];
}

export interface PushNotification {
    fieldNames?: string[];
    objectName?: string[];
}

export interface Queue extends Metadata {
    doesSendEmailToMembers?: boolean[];
    email?: string[];
    name?: string[];
    queueMembers?: QueueMembers[];
    queueRoutingConfig?: string[];
    queueSobject?: QueueSobject[];
}

export interface QueueMembers {
    publicGroups?: PublicGroups[];
    roleAndSubordinates?: RoleAndSubordinates[];
    roleAndSubordinatesInternal?: RoleAndSubordinatesInternal[];
    roles?: Roles[];
    users?: Users[];
}

export interface QueueRoutingConfig extends Metadata {
    capacityPercentage?: number[];
    capacityWeight?: number[];
    dropAdditionalSkillsTimeout?: number[];
    isAttributeBased?: boolean[];
    label?: string[];
    pushTimeout?: number[];
    queueOverflowAssignee?: string[];
    routingModel?: RoutingModel[];
    routingPriority?: number[];
    userOverflowAssignee?: string[];
}

export interface QueueSobject {
    sobjectType?: string[];
}

export interface QuickAction extends Metadata {
    canvas?: string[];
    description?: string[];
    fieldOverrides?: FieldOverride[];
    flowDefinition?: string[];
    height?: number[];
    icon?: string[];
    isProtected?: boolean[];
    label?: string[];
    lightningComponent?: string[];
    mobExtDisplayMode?: MobExtDisplayMode[];
    optionsCreateFeedItem?: boolean[];
    page?: string[];
    quickActionLayout?: QuickActionLayout[];
    quickActionSendEmailOptions?: QuickActionSendEmailOptions[];
    standardLabel?: QuickActionLabel[];
    successMessage?: string[];
    targetObject?: string[];
    targetParentField?: string[];
    targetRecordType?: string[];
    type?: QuickActionType[];
    width?: number[];
}

export interface QuickActionLayout {
    layoutSectionStyle?: LayoutSectionStyle[];
    quickActionLayoutColumns?: QuickActionLayoutColumn[];
}

export interface QuickActionLayoutColumn {
    quickActionLayoutItems?: QuickActionLayoutItem[];
}

export interface QuickActionLayoutItem {
    emptySpace?: boolean[];
    field?: string[];
    uiBehavior?: UiBehavior[];
}

export interface QuickActionList {
    quickActionListItems?: QuickActionListItem[];
}

export interface QuickActionListItem {
    quickActionName?: string[];
}

export interface QuickActionSendEmailOptions {
    defaultEmailTemplateName?: string[];
    ignoreDefaultEmailTemplateSubject?: boolean[];
}

export interface QuickActionTranslation {
    label?: string[];
    name?: string[];
}

export interface QuotasSettings {
    showQuotas?: boolean[];
}

export interface QuoteSettings extends Metadata {
    enableQuote?: boolean[];
    enableQuotesWithoutOppEnabled?: boolean[];
}

export interface ReadResult {
    records?: Metadata[];
}

export interface RecommendationAudience {
    recommendationAudienceDetails?: RecommendationAudienceDetail[];
}

export interface RecommendationAudienceDetail {
    audienceCriteriaType?: AudienceCriteriaType[];
    audienceCriteriaValue?: string[];
    setupName?: string[];
}

export interface RecommendationConditionValue {
    type?: RecommendationConditionValueType[];
    value?: string[];
}

export interface RecommendationDefinition {
    recommendationDefinitionDetails?: RecommendationDefinitionDetail[];
}

export interface RecommendationDefinitionDetail {
    actionUrl?: string[];
    description?: string[];
    linkText?: string[];
    scheduledRecommendations?: ScheduledRecommendation[];
    setupName?: string[];
    title?: string[];
}

export interface RecommendationLoadCondition {
    field?: string[];
    operator?: RecommendationConditionOperator[];
    value?: RecommendationConditionValue[];
}

export interface RecommendationStrategy extends Metadata {
    actionContext?: StrategyAction[];
    contextRecordType?: string[];
    description?: string[];
    filter?: StrategyNodeFilter[];
    if?: StrategyNodeIf[];
    invocableAction?: StrategyNodeInvocableAction[];
    isTemplate?: boolean[];
    label?: string[];
    map?: StrategyNodeMap[];
    mutuallyExclusive?: StrategyNodeExclusive[];
    onBehalfOfExpression?: string[];
    recommendationLimit?: StrategyNodeRecommendationLimit[];
    recommendationLoad?: StrategyNodeRecommendationLoad[];
    sort?: StrategyNodeSort[];
    union?: StrategyNodeUnion[];
}

export interface RecordActionDefaultItem {
    action?: string[];
    isMandatory?: boolean[];
    isUiRemoveHidden?: boolean[];
    pinned?: PinnedAction[];
    position?: number[];
    type?: RecordActionType[];
}

export interface RecordActionDeployment extends Metadata {
    channelConfigurations?: RecordActionDeploymentChannel[];
    deploymentContexts?: RecordActionDeploymentContext[];
    hasGuidedActions?: boolean[];
    hasRecommendations?: boolean[];
    masterLabel?: string[];
    recommendation?: RecordActionRecommendation[];
    selectableItems?: RecordActionSelectableItem[];
}

export interface RecordActionDeploymentChannel {
    channel?: ChannelSource[];
    channelItems?: RecordActionDefaultItem[];
    isAutopopEnabled?: boolean[];
}

export interface RecordActionDeploymentContext {
    entityName?: string[];
    recommendationStrategy?: string[];
}

export interface RecordActionRecommendation {
    defaultStrategy?: string[];
    hasDescription?: boolean[];
    hasImage?: boolean[];
    hasRejectAction?: boolean[];
    hasTitle?: boolean[];
    maxDisplayRecommendations?: number[];
}

export interface RecordActionSelectableItem {
    action?: string[];
    type?: RecordActionType[];
}

export interface RecordPageSettings extends Metadata {
    enableActivityRelatedList?: boolean[];
    enableFullRecordView?: boolean[];
}

export interface RecordType extends Metadata {
    active?: boolean[];
    businessProcess?: string[];
    compactLayoutAssignment?: string[];
    description?: string[];
    label?: string[];
    picklistValues?: RecordTypePicklistValue[];
}

export interface RecordTypePicklistValue {
    picklist?: string[];
    values?: PicklistValue[];
}

export interface RecordTypeTranslation {
    description?: string[];
    label?: string[];
    name?: string[];
}

export interface RelatedContent {
    relatedContentItems?: RelatedContentItem[];
}

export interface RelatedContentItem {
    layoutItem?: LayoutItem[];
}

export interface RelatedList {
    hideOnDetail?: boolean[];
    name?: string[];
}

export interface RelatedListItem {
    customButtons?: string[];
    excludeButtons?: string[];
    fields?: string[];
    relatedList?: string[];
    sortField?: string[];
    sortOrder?: SortOrder[];
}

export interface RemoteSiteSetting extends Metadata {
    description?: string[];
    disableProtocolSecurity?: boolean[];
    isActive?: boolean[];
    url?: string[];
}

export interface Report extends Metadata {
    aggregates?: ReportAggregate[];
    block?: Report[];
    blockInfo?: ReportBlockInfo[];
    buckets?: ReportBucketField[];
    chart?: ReportChart[];
    colorRanges?: ReportColorRange[];
    columns?: ReportColumn[];
    crossFilters?: ReportCrossFilter[];
    currency?: CurrencyIsoCode[];
    customDetailFormulas?: ReportCustomDetailFormula[];
    dataCategoryFilters?: ReportDataCategoryFilter[];
    description?: string[];
    division?: string[];
    filter?: ReportFilter[];
    folderName?: string[];
    format?: ReportFormat[];
    formattingRules?: ReportFormattingRule[];
    groupingsAcross?: ReportGrouping[];
    groupingsDown?: ReportGrouping[];
    historicalSelector?: ReportHistoricalSelector[];
    name?: string[];
    numSubscriptions?: number[];
    params?: ReportParam[];
    reportType?: string[];
    roleHierarchyFilter?: string[];
    rowLimit?: number[];
    scope?: string[];
    showCurrentDate?: boolean[];
    showDetails?: boolean[];
    showGrandTotal?: boolean[];
    showSubTotals?: boolean[];
    sortColumn?: string[];
    sortOrder?: SortOrder[];
    territoryHierarchyFilter?: string[];
    timeFrameFilter?: ReportTimeFrameFilter[];
    userFilter?: string[];
}

export interface ReportAggregate {
    acrossGroupingContext?: string[];
    calculatedFormula?: string[];
    datatype?: ReportAggregateDatatype[];
    description?: string[];
    developerName?: string[];
    downGroupingContext?: string[];
    isActive?: boolean[];
    isCrossBlock?: boolean[];
    masterLabel?: string[];
    reportType?: string[];
    scale?: number[];
}

export interface ReportAggregateReference {
    aggregate?: string[];
}

export interface ReportBlockInfo {
    aggregateReferences?: ReportAggregateReference[];
    blockId?: string[];
    joinTable?: string[];
}

export interface ReportBucketField {
    bucketType?: ReportBucketFieldType[];
    developerName?: string[];
    masterLabel?: string[];
    nullTreatment?: ReportFormulaNullTreatment[];
    otherBucketLabel?: string[];
    sourceColumnName?: string[];
    useOther?: boolean[];
    values?: ReportBucketFieldValue[];
}

export interface ReportBucketFieldSourceValue {
    from?: string[];
    sourceValue?: string[];
    to?: string[];
}

export interface ReportBucketFieldValue {
    sourceValues?: ReportBucketFieldSourceValue[];
    value?: string[];
}

export interface ReportChart {
    backgroundColor1?: string[];
    backgroundColor2?: string[];
    backgroundFadeDir?: ChartBackgroundDirection[];
    chartSummaries?: ChartSummary[];
    chartType?: ChartType[];
    enableHoverLabels?: boolean[];
    expandOthers?: boolean[];
    groupingColumn?: string[];
    legendPosition?: ChartLegendPosition[];
    location?: ChartPosition[];
    secondaryGroupingColumn?: string[];
    showAxisLabels?: boolean[];
    showPercentage?: boolean[];
    showTotal?: boolean[];
    showValues?: boolean[];
    size?: ReportChartSize[];
    summaryAxisManualRangeEnd?: number[];
    summaryAxisManualRangeStart?: number[];
    summaryAxisRange?: ChartRangeType[];
    textColor?: string[];
    textSize?: number[];
    title?: string[];
    titleColor?: string[];
    titleSize?: number[];
}

export interface ReportChartComponentLayoutItem {
    cacheData?: boolean[];
    contextFilterableField?: string[];
    error?: string[];
    hideOnError?: boolean[];
    includeContext?: boolean[];
    reportName?: string[];
    showTitle?: boolean[];
    size?: ReportChartComponentSize[];
}

export interface ReportColorRange {
    aggregate?: ReportSummaryType[];
    columnName?: string[];
    highBreakpoint?: number[];
    highColor?: string[];
    lowBreakpoint?: number[];
    lowColor?: string[];
    midColor?: string[];
}

export interface ReportColumn {
    aggregateTypes?: ReportSummaryType[];
    field?: string[];
    reverseColors?: boolean[];
    showChanges?: boolean[];
}

export interface ReportCrossFilter {
    criteriaItems?: ReportFilterItem[];
    operation?: ObjectFilterOperator[];
    primaryTableColumn?: string[];
    relatedTable?: string[];
    relatedTableJoinColumn?: string[];
}

export interface ReportCustomDetailFormula {
    calculatedFormula?: string[];
    dataType?: string[];
    description?: string[];
    developerName?: string[];
    label?: string[];
    scale?: number[];
}

export interface ReportDataCategoryFilter {
    dataCategory?: string[];
    dataCategoryGroup?: string[];
    operator?: DataCategoryFilterOperation[];
}

export interface ReportFilter {
    booleanFilter?: string[];
    criteriaItems?: ReportFilterItem[];
    language?: Language[];
}

export interface ReportFilterItem {
    column?: string[];
    columnToColumn?: boolean[];
    isUnlocked?: boolean[];
    operator?: FilterOperation[];
    snapshot?: string[];
    value?: string[];
}

export interface ReportFolder extends Folder {
}

export interface ReportFormattingRule {
    aggregate?: ReportSummaryType[];
    columnName?: string[];
    values?: ReportFormattingRuleValue[];
}

export interface ReportFormattingRuleValue {
    backgroundColor?: string[];
    rangeUpperBound?: number[];
}

export interface ReportGrouping {
    aggregateType?: ReportAggrType[];
    dateGranularity?: UserDateGranularity[];
    field?: string[];
    sortByName?: string[];
    sortOrder?: SortOrder[];
    sortType?: ReportSortType[];
}

export interface ReportHistoricalSelector {
    snapshot?: string[];
}

export interface ReportLayoutSection {
    columns?: ReportTypeColumn[];
    masterLabel?: string[];
}

export interface ReportParam {
    name?: string[];
    value?: string[];
}

export interface ReportTimeFrameFilter {
    dateColumn?: string[];
    endDate?: string[];
    interval?: UserDateInterval[];
    startDate?: string[];
}

export interface ReportType extends Metadata {
    autogenerated?: boolean[];
    baseObject?: string[];
    category?: ReportTypeCategory[];
    deployed?: boolean[];
    description?: string[];
    join?: ObjectRelationship[];
    label?: string[];
    sections?: ReportLayoutSection[];
}

export interface ReportTypeColumn {
    checkedByDefault?: boolean[];
    displayNameOverride?: string[];
    field?: string[];
    table?: string[];
}

export interface ReportTypeColumnTranslation {
    label?: string[];
    name?: string[];
}

export interface ReportTypeSectionTranslation {
    columns?: ReportTypeColumnTranslation[];
    label?: string[];
    name?: string[];
}

export interface ReportTypeTranslation {
    description?: string[];
    label?: string[];
    name?: string[];
    sections?: ReportTypeSectionTranslation[];
}

export interface ReputationBranding {
    smallImage?: string[];
}

export interface ReputationLevel {
    branding?: ReputationBranding[];
    label?: string[];
    lowerThreshold?: number[];
}

export interface ReputationLevelDefinitions {
    level?: ReputationLevel[];
}

export interface ReputationLevels {
    chatterAnswersReputationLevels?: ChatterAnswersReputationLevel[];
    ideaReputationLevels?: IdeaReputationLevel[];
}

export interface ReputationPointsRule {
    eventType?: string[];
    points?: number[];
}

export interface ReputationPointsRules {
    pointsRule?: ReputationPointsRule[];
}

export interface RestrictionRule extends Metadata {
    active?: boolean[];
    description?: string[];
    enforcementType?: EnforcementType[];
    masterLabel?: string[];
    recordFilter?: string[];
    targetEntity?: string[];
    userCriteria?: string[];
    version?: number[];
}

export interface RetailExecutionSettings extends Metadata {
    enableRetailExecution?: boolean[];
}

export interface RetrieveMessage {
    fileName?: string[];
    problem?: string[];
}

export interface RetrieveRequest {
    apiVersion?: number[];
    packageNames?: string[];
    singlePackage?: boolean[];
    specificFiles?: string[];
    unpackaged?: Package[];
}

export interface RetrieveResult {
    done?: boolean[];
    errorMessage?: string[];
    errorStatusCode?: StatusCode[];
    fileProperties?: FileProperties[];
    id?: string[];
    messages?: RetrieveMessage[];
    status?: RetrieveStatus[];
    success?: boolean[];
    zipFile?: any[];
}

export interface Role extends RoleOrTerritory {
    parentRole?: string[];
}

export interface RoleAndSubordinates {
    roleAndSubordinate?: string[];
}

export interface RoleAndSubordinatesInternal {
    roleAndSubordinateInternal?: string[];
}

export interface RoleOrTerritory extends Metadata {
    caseAccessLevel?: string[];
    contactAccessLevel?: string[];
    description?: string[];
    mayForecastManagerShare?: boolean[];
    name?: string[];
    opportunityAccessLevel?: string[];
}

export interface Roles {
    role?: string[];
}

export interface RuleEntry {
    assignedTo?: string[];
    assignedToType?: AssignToLookupValueType[];
    booleanFilter?: string[];
    businessHours?: string[];
    businessHoursSource?: BusinessHoursSourceType[];
    criteriaItems?: FilterItem[];
    disableEscalationWhenModified?: boolean[];
    escalationAction?: EscalationAction[];
    escalationStartTime?: EscalationStartTimeType[];
    formula?: string[];
    notifyCcRecipients?: boolean[];
    overrideExistingTeams?: boolean[];
    replyToEmail?: string[];
    senderEmail?: string[];
    senderName?: string[];
    team?: string[];
    template?: string[];
}

export interface RunTestFailure {
    id?: ID[];
    message?: string[];
    methodName?: string[];
    name?: string[];
    namespace?: string[];
    packageName?: string[];
    seeAllData?: boolean[];
    stackTrace?: string[];
    time?: number[];
    type?: string[];
}

export interface RunTestsResult {
    apexLogId?: string[];
    codeCoverage?: CodeCoverageResult[];
    codeCoverageWarnings?: CodeCoverageWarning[];
    failures?: RunTestFailure[];
    flowCoverage?: FlowCoverageResult[];
    flowCoverageWarnings?: FlowCoverageWarning[];
    numFailures?: number[];
    numTestsRun?: number[];
    successes?: RunTestSuccess[];
    totalTime?: number[];
}

export interface RunTestSuccess {
    id?: ID[];
    methodName?: string[];
    name?: string[];
    namespace?: string[];
    seeAllData?: boolean[];
    time?: number[];
}

export interface SamlSsoConfig extends Metadata {
    attributeName?: string[];
    attributeNameIdFormat?: string[];
    decryptionCertificate?: string[];
    errorUrl?: string[];
    executionUserId?: string[];
    identityLocation?: SamlIdentityLocationType[];
    identityMapping?: SamlIdentityType[];
    issuer?: string[];
    loginUrl?: string[];
    logoutUrl?: string[];
    name?: string[];
    oauthTokenEndpoint?: string[];
    redirectBinding?: boolean[];
    requestSignatureMethod?: string[];
    requestSigningCertId?: string[];
    salesforceLoginUrl?: string[];
    samlEntityId?: string[];
    samlJitHandlerId?: string[];
    samlVersion?: SamlType[];
    singleLogoutBinding?: SamlSpSLOBinding[];
    singleLogoutUrl?: string[];
    userProvisioning?: boolean[];
    validationCert?: string[];
}

export interface SaveResult {
    errors?: Error[];
    fullName?: string[];
    success?: boolean[];
}

export interface ScheduledRecommendation {
    scheduledRecommendationDetails?: ScheduledRecommendationDetail[];
}

export interface ScheduledRecommendationDetail {
    channel?: RecommendationChannel[];
    enabled?: boolean[];
    rank?: number[];
    recommendationAudience?: string[];
}

export interface SchemaSettings extends Metadata {
    enableAdvancedCMTSecurity?: boolean[];
    enableAdvancedCSSecurity?: boolean[];
    enableListCustomSettingCreation?: boolean[];
    enableSOSLOnCustomSettings?: boolean[];
}

export interface Scontrol extends MetadataWithContent {
    contentSource?: SControlContentSource[];
    description?: string[];
    encodingKey?: Encoding[];
    fileContent?: any[];
    fileName?: string[];
    name?: string[];
    supportsCaching?: boolean[];
}

export interface ScontrolTranslation {
    label?: string[];
    name?: string[];
}

export interface SearchLayouts {
    customTabListAdditionalFields?: string[];
    excludedStandardButtons?: string[];
    listViewButtons?: string[];
    lookupDialogsAdditionalFields?: string[];
    lookupFilterFields?: string[];
    lookupPhoneDialogsAdditionalFields?: string[];
    massQuickActions?: string[];
    searchFilterFields?: string[];
    searchResultsAdditionalFields?: string[];
    searchResultsCustomButtons?: string[];
}

export interface SearchSettings extends Metadata {
    documentContentSearchEnabled?: boolean[];
    enableAdvancedSearchInAlohaSidebar?: boolean[];
    enableEinsteinSearchPersonalization?: boolean[];
    enableQuerySuggestionPigOn?: boolean[];
    enableSalesforceGeneratedSynonyms?: boolean[];
    enableSetupSearch?: boolean[];
    optimizeSearchForCJKEnabled?: boolean[];
    recentlyViewedUsersForBlankLookupEnabled?: boolean[];
    searchSettingsByObject?: SearchSettingsByObject[];
    sidebarAutoCompleteEnabled?: boolean[];
    sidebarDropDownListEnabled?: boolean[];
    sidebarLimitToItemsIOwnCheckboxEnabled?: boolean[];
    singleSearchResultShortcutEnabled?: boolean[];
    spellCorrectKnowledgeSearchEnabled?: boolean[];
}

export interface SearchSettingsByObject {
    searchSettingsByObject?: ObjectSearchSetting[];
}

export interface SecuritySettings extends Metadata {
    canUsersGrantLoginAccess?: boolean[];
    enableAdminLoginAsAnyUser?: boolean[];
    enableAuditFieldsInactiveOwner?: boolean[];
    enableAuraSecureEvalPref?: boolean[];
    enableRequireHttpsConnection?: boolean[];
    isTLSv12Required?: boolean[];
    isTLSv12RequiredCommunities?: boolean[];
    networkAccess?: NetworkAccess[];
    passwordPolicies?: PasswordPolicies[];
    sessionSettings?: SessionSettings[];
    singleSignOnSettings?: SingleSignOnSettings[];
}

export interface ServiceChannel extends Metadata {
    interactionComponent?: string[];
    label?: string[];
    relatedEntityType?: string[];
    secondaryRoutingPriorityField?: string[];
    serviceChannelFieldPriorities?: ServiceChannelFieldPriority[];
}

export interface ServiceChannelFieldPriority {
    priority?: number[];
    value?: string[];
}

export interface ServiceChannelStatus {
    channel?: string[];
}

export interface ServiceCloudConsoleConfig {
    componentList?: AppComponentList[];
    detailPageRefreshMethod?: string[];
    footerColor?: string[];
    headerColor?: string[];
    keyboardShortcuts?: KeyboardShortcuts[];
    listPlacement?: ListPlacement[];
    listRefreshMethod?: string[];
    liveAgentConfig?: LiveAgentConfig[];
    primaryTabColor?: string[];
    pushNotifications?: PushNotification[];
    tabLimitConfig?: TabLimitConfig[];
    whitelistedDomains?: string[];
}

export interface ServicePresenceStatus extends Metadata {
    channels?: ServiceChannelStatus[];
    label?: string[];
}

export interface SessionSettings {
    allowUserAuthenticationByCertificate?: boolean[];
    canConfirmEmailChangeInLightningCommunities?: boolean[];
    disableTimeoutWarning?: boolean[];
    enableCSPOnEmail?: boolean[];
    enableCSRFOnGet?: boolean[];
    enableCSRFOnPost?: boolean[];
    enableCacheAndAutocomplete?: boolean[];
    enableClickjackNonsetupSFDC?: boolean[];
    enableClickjackNonsetupUser?: boolean[];
    enableClickjackNonsetupUserHeaderless?: boolean[];
    enableClickjackSetup?: boolean[];
    enableContentSniffingProtection?: boolean[];
    enableLightningLogin?: boolean[];
    enableLightningLoginOnlyWithUserPerm?: boolean[];
    enablePostForSessions?: boolean[];
    enableSMSIdentity?: boolean[];
    enableU2F?: boolean[];
    enableUpgradeInsecureRequests?: boolean[];
    enableXssProtection?: boolean[];
    enforceIpRangesEveryRequest?: boolean[];
    forceLogoutOnSessionTimeout?: boolean[];
    forceRelogin?: boolean[];
    hasRetainedLoginHints?: boolean[];
    hasUserSwitching?: boolean[];
    hstsOnForcecomSites?: boolean[];
    identityConfirmationOnEmailChange?: boolean[];
    identityConfirmationOnTwoFactorRegistrationEnabled?: boolean[];
    lockSessionsToDomain?: boolean[];
    lockSessionsToIp?: boolean[];
    lockerServiceAPIVersion?: string[];
    lockerServiceCSP?: boolean[];
    lockerServiceFrozenRealm?: boolean[];
    logoutURL?: string[];
    redirectionWarning?: boolean[];
    referrerPolicy?: boolean[];
    requireHttpOnly?: boolean[];
    requireHttps?: boolean[];
    securityCentralKillSession?: boolean[];
    sessionTimeout?: SessionTimeout[];
}

export interface SharedTo {
    allCustomerPortalUsers?: string[];
    allInternalUsers?: string[];
    allPartnerUsers?: string[];
    channelProgramGroup?: string[];
    channelProgramGroups?: string[];
    group?: string[];
    groups?: string[];
    guestUser?: string[];
    managerSubordinates?: string[];
    managers?: string[];
    portalRole?: string[];
    portalRoleAndSubordinates?: string[];
    queue?: string[];
    role?: string[];
    roleAndSubordinates?: string[];
    roleAndSubordinatesInternal?: string[];
    roles?: string[];
    rolesAndSubordinates?: string[];
    territories?: string[];
    territoriesAndSubordinates?: string[];
    territory?: string[];
    territoryAndSubordinates?: string[];
}

export interface SharingBaseRule extends Metadata {
    accessLevel?: string[];
    accountSettings?: AccountSharingRuleSettings[];
    description?: string[];
    label?: string[];
    sharedTo?: SharedTo[];
}

export interface SharingCriteriaRule extends SharingBaseRule {
    booleanFilter?: string[];
    criteriaItems?: FilterItem[];
}

export interface SharingGuestRule extends SharingBaseRule {
    booleanFilter?: string[];
    criteriaItems?: FilterItem[];
}

export interface SharingOwnerRule extends SharingBaseRule {
    sharedFrom?: SharedTo[];
}

export interface SharingReason extends Metadata {
    label?: string[];
}

export interface SharingReasonTranslation {
    label?: string[];
    name?: string[];
}

export interface SharingRecalculation {
    className?: string[];
}

export interface SharingRules extends Metadata {
    sharingCriteriaRules?: SharingCriteriaRule[];
    sharingGuestRules?: SharingGuestRule[];
    sharingOwnerRules?: SharingOwnerRule[];
    sharingTerritoryRules?: SharingTerritoryRule[];
}

export interface SharingSet extends Metadata {
    accessMappings?: AccessMapping[];
    description?: string[];
    name?: string[];
    profiles?: string[];
}

export interface SharingSettings extends Metadata {
    enableAccountRoleOptimization?: boolean[];
    enableAssetSharing?: boolean[];
    enableCommunityUserVisibility?: boolean[];
    enableExternalSharingModel?: boolean[];
    enableManagerGroups?: boolean[];
    enableManualUserRecordSharing?: boolean[];
    enablePartnerSuperUserAccess?: boolean[];
    enablePortalUserCaseSharing?: boolean[];
    enablePortalUserVisibility?: boolean[];
    enableRemoveTMGroupMembership?: boolean[];
    enableSecureGuestAccess?: boolean[];
    enableStandardReportVisibility?: boolean[];
    enableTerritoryForecastManager?: boolean[];
}

export interface SharingTerritoryRule extends SharingOwnerRule {
}

export interface SidebarComponent {
    componentType?: string[];
    createAction?: string[];
    enableLinking?: boolean[];
    height?: number[];
    label?: string[];
    lookup?: string[];
    page?: string[];
    relatedLists?: RelatedList[];
    unit?: string[];
    updateAction?: string[];
    width?: number[];
}

export interface SingleSignOnSettings {
    enableForceDelegatedCallout?: boolean[];
    enableMultipleSamlConfigs?: boolean[];
    enableSamlJitProvisioning?: boolean[];
    enableSamlLogin?: boolean[];
}

export interface SiteDotCom extends MetadataWithContent {
    label?: string[];
    siteType?: SiteType[];
}

export interface SiteRedirectMapping {
    action?: SiteRedirect[];
    isActive?: boolean[];
    source?: string[];
    target?: string[];
}

export interface SiteSettings extends Metadata {
    enableProxyLoginICHeader?: boolean[];
    enableTopicsInSites?: boolean[];
    enableVisualforceApiAccessAllowed?: boolean[];
}

export interface SiteWebAddress {
    certificate?: string[];
    domainName?: string[];
    primary?: boolean[];
}

export interface Skill extends Metadata {
    assignments?: SkillAssignments[];
    description?: string[];
    label?: string[];
}

export interface SkillAssignments {
    profiles?: SkillProfileAssignments[];
    users?: SkillUserAssignments[];
}

export interface SkillProfileAssignments {
    profile?: string[];
}

export interface SkillUserAssignments {
    user?: string[];
}

export interface SocialCustomerServiceSettings extends Metadata {
    caseSubjectOption?: CaseSubjectOption[];
    enableSocialApprovals?: boolean[];
    enableSocialCaseAssignmentRules?: boolean[];
    enableSocialCustomerService?: boolean[];
    enableSocialPersonaHistoryTracking?: boolean[];
    enableSocialPostHistoryTracking?: boolean[];
    enableSocialReceiveParentPost?: boolean[];
}

export interface SocialProfileSettings extends Metadata {
    enableSocialProfiles?: boolean[];
    isFacebookSocialProfilesDisabled?: boolean[];
    isLinkedInSocialProfilesDisabled?: boolean[];
    isTwitterSocialProfilesDisabled?: boolean[];
    isYouTubeSocialProfilesDisabled?: boolean[];
}

export interface StandardFieldTranslation {
    label?: string[];
    name?: string[];
}

export interface StandardValue extends CustomValue {
    allowEmail?: boolean[];
    closed?: boolean[];
    converted?: boolean[];
    cssExposed?: boolean[];
    forecastCategory?: ForecastCategories[];
    groupingString?: string[];
    highPriority?: boolean[];
    probability?: number[];
    reverseRole?: string[];
    reviewed?: boolean[];
    won?: boolean[];
}

export interface StandardValueSet extends Metadata {
    groupingStringEnum?: string[];
    sorted?: boolean[];
    standardValue?: StandardValue[];
}

export interface StandardValueSetTranslation extends Metadata {
    valueTranslation?: ValueTranslation[];
}

export interface State {
    active?: boolean[];
    integrationValue?: string[];
    isoCode?: string[];
    label?: string[];
    standard?: boolean[];
    visible?: boolean[];
}

export interface StaticResource extends MetadataWithContent {
    cacheControl?: StaticResourceCacheControl[];
    contentType?: string[];
    description?: string[];
}

export interface StrategyAction {
    action?: string[];
    argument?: StrategyActionArg[];
    description?: string[];
    label?: string[];
    name?: string[];
    type?: InvocableActionType[];
}

export interface StrategyActionArg {
    name?: string[];
    value?: string[];
}

export interface StrategyNodeBase {
    childNode?: string[];
    description?: string[];
    label?: string[];
    name?: string[];
}

export interface StrategyNodeExclusive extends StrategyNodeUnionBase {
}

export interface StrategyNodeFilter extends StrategyNodeUnionBase {
    expression?: string[];
}

export interface StrategyNodeIf extends StrategyNodeUnionBase {
    childNodeExpression?: IfExpression[];
    onlyFirstMatch?: boolean[];
}

export interface StrategyNodeInvocableAction extends StrategyNodeUnionBase {
    action?: string[];
    argument?: StrategyNodeInvocableActionArg[];
    isGenerator?: boolean[];
    type?: InvocableActionType[];
}

export interface StrategyNodeInvocableActionArg {
    name?: string[];
    value?: string[];
}

export interface StrategyNodeMap extends StrategyNodeUnionBase {
    mapExpression?: MapExpression[];
}

export interface StrategyNodeRecommendationLimit extends StrategyNodeUnionBase {
    filterMode?: StrategyReactionType[];
    lookbackDuration?: number[];
    maxRecommendationCount?: number[];
}

export interface StrategyNodeRecommendationLoad extends StrategyNodeUnionBase {
    condition?: RecommendationLoadCondition[];
    conditionLogic?: string[];
}

export interface StrategyNodeSort extends StrategyNodeUnionBase {
    field?: StrategyNodeSortField[];
}

export interface StrategyNodeSortField {
    name?: string[];
    nullsFirst?: boolean[];
    order?: SortOrder[];
}

export interface StrategyNodeUnion extends StrategyNodeUnionBase {
}

export interface StrategyNodeUnionBase extends StrategyNodeBase {
    limit?: number[];
}

export interface SubtabComponents {
    containers?: Container[];
}

export interface SummaryLayout {
    masterLabel?: string[];
    sizeX?: number[];
    sizeY?: number[];
    sizeZ?: number[];
    summaryLayoutItems?: SummaryLayoutItem[];
    summaryLayoutStyle?: SummaryLayoutStyle[];
}

export interface SummaryLayoutItem {
    customLink?: string[];
    field?: string[];
    posX?: number[];
    posY?: number[];
    posZ?: number[];
}

export interface SupervisorAgentConfigSkills {
    skill?: string[];
}

export interface SurveySettings extends Metadata {
    enableSurvey?: boolean[];
    enableSurveyOwnerCanManageResponse?: boolean[];
}

export interface SynonymDictionary extends Metadata {
    groups?: SynonymGroup[];
    isProtected?: boolean[];
    label?: string[];
}

export interface SynonymGroup {
    languages?: Language[];
    terms?: string[];
}

export interface SystemNotificationSettings extends Metadata {
    disableDowntimeNotifications?: boolean[];
    disableMaintenanceNotifications?: boolean[];
}

export interface TabLimitConfig {
    maxNumberOfPrimaryTabs?: string[];
    maxNumberOfSubTabs?: string[];
}

export interface Targets {
    target?: string[];
}

export interface Territory extends RoleOrTerritory {
    accountAccessLevel?: string[];
    parentTerritory?: string[];
}

export interface Territory2 extends Metadata {
    accountAccessLevel?: string[];
    caseAccessLevel?: string[];
    contactAccessLevel?: string[];
    customFields?: FieldValue[];
    description?: string[];
    name?: string[];
    opportunityAccessLevel?: string[];
    parentTerritory?: string[];
    ruleAssociations?: Territory2RuleAssociation[];
    territory2Type?: string[];
}

export interface Territory2Model extends Metadata {
    customFields?: FieldValue[];
    description?: string[];
    name?: string[];
}

export interface Territory2Rule extends Metadata {
    active?: boolean[];
    booleanFilter?: string[];
    name?: string[];
    objectType?: string[];
    ruleItems?: Territory2RuleItem[];
}

export interface Territory2RuleAssociation {
    inherited?: boolean[];
    ruleName?: string[];
}

export interface Territory2RuleItem {
    field?: string[];
    operation?: FilterOperation[];
    value?: string[];
}

export interface Territory2Settings extends Metadata {
    defaultAccountAccessLevel?: string[];
    defaultCaseAccessLevel?: string[];
    defaultContactAccessLevel?: string[];
    defaultOpportunityAccessLevel?: string[];
    enableTerritoryManagement2?: boolean[];
    opportunityFilterSettings?: Territory2SettingsOpportunityFilter[];
}

export interface Territory2SettingsOpportunityFilter {
    apexClassName?: string[];
    enableFilter?: boolean[];
    runOnCreate?: boolean[];
}

export interface Territory2Type extends Metadata {
    description?: string[];
    name?: string[];
    priority?: number[];
}

export interface TimeSheetTemplate extends Metadata {
    active?: boolean[];
    description?: string[];
    frequency?: TimeSheetFrequency[];
    masterLabel?: string[];
    startDate?: string[];
    timeSheetTemplateAssignments?: TimeSheetTemplateAssignment[];
    workWeekEndDay?: DaysOfWeek[];
    workWeekStartDay?: DaysOfWeek[];
}

export interface TimeSheetTemplateAssignment {
    assignedTo?: string[];
}

export interface TopicsForObjects extends Metadata {
    enableTopics?: boolean[];
    entityApiName?: string[];
}

export interface TrailheadSettings extends Metadata {
    enableMyTrailheadPref?: boolean[];
}

export interface TransactionSecurityAction {
    block?: boolean[];
    endSession?: boolean[];
    freezeUser?: boolean[];
    notifications?: TransactionSecurityNotification[];
    twoFactorAuthentication?: boolean[];
}

export interface TransactionSecurityNotification {
    inApp?: boolean[];
    sendEmail?: boolean[];
    user?: string[];
}

export interface TransactionSecurityPolicy extends Metadata {
    action?: TransactionSecurityAction[];
    active?: boolean[];
    apexClass?: string[];
    description?: string[];
    developerName?: string[];
    eventName?: TransactionSecurityEventName[];
    eventType?: MonitoredEvents[];
    executionUser?: string[];
    flow?: string[];
    masterLabel?: string[];
    resourceName?: string[];
    type?: TxnSecurityPolicyType[];
}

export interface Translations extends Metadata {
    customApplications?: CustomApplicationTranslation[];
    customDataTypeTranslations?: CustomDataTypeTranslation[];
    customLabels?: CustomLabelTranslation[];
    customPageWebLinks?: CustomPageWebLinkTranslation[];
    customTabs?: CustomTabTranslation[];
    flowDefinitions?: FlowDefinitionTranslation[];
    quickActions?: GlobalQuickActionTranslation[];
    reportTypes?: ReportTypeTranslation[];
    scontrols?: ScontrolTranslation[];
}

export interface UiFormulaCriterion {
    leftValue?: string[];
    operator?: string[];
    rightValue?: string[];
}

export interface UiFormulaRule {
    booleanFilter?: string[];
    criteria?: UiFormulaCriterion[];
}

export interface UIObjectRelationConfig extends Metadata {
    UIObjectRelationFieldConfigs?: UIObjectRelationFieldConfig[];
    contextObject?: string[];
    contextObjectRecordType?: string[];
    directRelationshipField?: string[];
    indirectObjectContextField?: string[];
    indirectObjectRelatedField?: string[];
    indirectRelationshipObject?: string[];
    isActive?: boolean[];
    masterLabel?: string[];
    relatedObject?: string[];
    relatedObjectRecordType?: string[];
    relationshipType?: ObjectRelationshipType[];
}

export interface UIObjectRelationFieldConfig {
    displayLabel?: string[];
    queryText?: string[];
    rowOrder?: number[];
}

export interface UiPlugin extends MetadataWithContent {
    description?: string[];
    extensionPointIdentifier?: string[];
    isEnabled?: boolean[];
    language?: string[];
    masterLabel?: string[];
}

export interface UpsertResult {
    created?: boolean[];
    errors?: Error[];
    fullName?: string[];
    success?: boolean[];
}

export interface UserCriteria extends Metadata {
    creationAgeInSeconds?: number[];
    description?: string[];
    lastChatterActivityAgeInSeconds?: number[];
    masterLabel?: string[];
    profiles?: string[];
    userTypes?: NetworkUserType[];
}

export interface UserEngagementSettings extends Metadata {
    canGovCloudUseAdoptionApps?: boolean[];
    doesScheduledSwitcherRunDaily?: boolean[];
    enableCustomHelpGlobalSection?: boolean[];
    enableHelpMenuShowFeedback?: boolean[];
    enableHelpMenuShowHelp?: boolean[];
    enableHelpMenuShowNewUser?: boolean[];
    enableHelpMenuShowSearch?: boolean[];
    enableHelpMenuShowSfdcContent?: boolean[];
    enableHelpMenuShowShortcut?: boolean[];
    enableHelpMenuShowSupport?: boolean[];
    enableHelpMenuShowTrailhead?: boolean[];
    enableIBILOptOutDashboards?: boolean[];
    enableIBILOptOutEvents?: boolean[];
    enableIBILOptOutReports?: boolean[];
    enableIBILOptOutTasks?: boolean[];
    enableLexToClassicFeedbackEnable?: boolean[];
    enableOrchestrationInSandbox?: boolean[];
    enableOrgUserAssistEnabled?: boolean[];
    enableScheduledSwitcher?: boolean[];
    enableSfdcProductFeedbackSurvey?: boolean[];
    enableShowSalesforceUserAssist?: boolean[];
    isAutoTransitionDelayed?: boolean[];
    isCrucNotificationDisabled?: boolean[];
    isCustomProfileAutoTransitionDelayed?: boolean[];
    isLEXWelcomeMatDisabled?: boolean[];
    isMeetTheAssistantDisabledInClassic?: boolean[];
    isMeetTheAssistantDisabledInLightning?: boolean[];
    optimizerAppEnabled?: boolean[];
}

export interface UserInterfaceSettings extends Metadata {
    alternateAlohaListView?: boolean[];
    enableAsyncRelatedLists?: boolean[];
    enableClickjackUserPageHeaderless?: boolean[];
    enableCollapsibleSections?: boolean[];
    enableCollapsibleSideBar?: boolean[];
    enableCustomObjectTruncate?: boolean[];
    enableCustomeSideBarOnAllPages?: boolean[];
    enableDeleteFieldHistory?: boolean[];
    enableHoverDetails?: boolean[];
    enableInlineEdit?: boolean[];
    enableNewPageLayoutEditor?: boolean[];
    enablePersonalCanvas?: boolean[];
    enablePrintableListViews?: boolean[];
    enableProfileCustomTabsets?: boolean[];
    enableQuickCreate?: boolean[];
    enableTabOrganizer?: boolean[];
}

export interface UserManagementSettings extends Metadata {
    enableCanAnswerContainUsername?: boolean[];
    enableCanSaveUserPerm?: boolean[];
    enableConcealPersonalInfo?: boolean[];
    enableContactlessExternalIdentityUsers?: boolean[];
    enableEnhancedPermsetMgmt?: boolean[];
    enableEnhancedProfileMgmt?: boolean[];
    enableNewProfileUI?: boolean[];
    enableScrambleUserData?: boolean[];
    enableUserSelfDeactivate?: boolean[];
}

export interface Users {
    user?: string[];
}

export interface ValidationRule extends Metadata {
    active?: boolean[];
    description?: string[];
    errorConditionFormula?: string[];
    errorDisplayField?: string[];
    errorMessage?: string[];
}

export interface ValidationRuleTranslation {
    errorMessage?: string[];
    name?: string[];
}

export interface ValueSet {
    controllingField?: string[];
    restricted?: boolean[];
    valueSetDefinition?: ValueSetValuesDefinition[];
    valueSetName?: string[];
    valueSettings?: ValueSettings[];
}

export interface ValueSettings {
    controllingFieldValue?: string[];
    valueName?: string[];
}

export interface ValueSetValuesDefinition {
    sorted?: boolean[];
    value?: CustomValue[];
}

export interface ValueTranslation {
    masterLabel?: string[];
    translation?: string[];
}

export interface ValueTypeField {
    fields?: ValueTypeField[];
    foreignKeyDomain?: string[];
    isForeignKey?: boolean[];
    isNameField?: boolean[];
    minOccurs?: number[];
    name?: string[];
    picklistValues?: PicklistEntry[];
    soapType?: string[];
    valueRequired?: boolean[];
}

export interface VoiceSettings extends Metadata {
    enableCallDisposition?: boolean[];
    enableVoiceCallList?: boolean[];
    enableVoiceCallRecording?: boolean[];
    enableVoiceCoaching?: boolean[];
    enableVoiceConferencing?: boolean[];
    enableVoiceLocalPresence?: boolean[];
    enableVoiceMail?: boolean[];
    enableVoiceMailDrop?: boolean[];
}

export interface WaveApplication extends Metadata {
    assetIcon?: string[];
    description?: string[];
    folder?: string[];
    masterLabel?: string[];
    shares?: FolderShare[];
    templateOrigin?: string[];
    templateVersion?: string[];
}

export interface WaveDashboard extends MetadataWithContent {
    application?: string[];
    description?: string[];
    masterLabel?: string[];
    templateAssetSourceName?: string[];
}

export interface WaveDataflow extends MetadataWithContent {
    dataflowType?: string[];
    description?: string[];
    masterLabel?: string[];
}

export interface WaveDataset extends Metadata {
    application?: string[];
    description?: string[];
    masterLabel?: string[];
    templateAssetSourceName?: string[];
}

export interface WaveLens extends MetadataWithContent {
    application?: string[];
    datasets?: string[];
    description?: string[];
    masterLabel?: string[];
    templateAssetSourceName?: string[];
    visualizationType?: string[];
}

export interface WaveRecipe extends MetadataWithContent {
    dataflow?: string[];
    masterLabel?: string[];
    securityPredicate?: string[];
    targetDatasetAlias?: string[];
}

export interface WaveTemplateBundle extends Metadata {
    assetIcon?: string[];
    assetVersion?: number[];
    description?: string[];
    label?: string[];
    templateType?: string[];
}

export interface WaveXmd extends Metadata {
    application?: string[];
    dataset?: string[];
    datasetConnector?: string[];
    datasetFullyQualifiedName?: string[];
    dates?: WaveXmdDate[];
    dimensions?: WaveXmdDimension[];
    measures?: WaveXmdMeasure[];
    organizations?: WaveXmdOrganization[];
    origin?: string[];
    type?: string[];
    waveVisualization?: string[];
}

export interface WaveXmdDate {
    alias?: string[];
    compact?: boolean[];
    dateFieldDay?: string[];
    dateFieldEpochDay?: string[];
    dateFieldEpochSecond?: string[];
    dateFieldFiscalMonth?: string[];
    dateFieldFiscalQuarter?: string[];
    dateFieldFiscalWeek?: string[];
    dateFieldFiscalYear?: string[];
    dateFieldFullYear?: string[];
    dateFieldHour?: string[];
    dateFieldMinute?: string[];
    dateFieldMonth?: string[];
    dateFieldQuarter?: string[];
    dateFieldSecond?: string[];
    dateFieldWeek?: string[];
    dateFieldYear?: string[];
    description?: string[];
    firstDayOfWeek?: number[];
    fiscalMonthOffset?: number[];
    isYearEndFiscalYear?: boolean[];
    label?: string[];
    showInExplorer?: boolean[];
    sortIndex?: number[];
    type?: string[];
}

export interface WaveXmdDimension {
    conditionalFormatting?: WaveXmdFormattingProperty[];
    customActions?: WaveXmdDimensionCustomAction[];
    customActionsEnabled?: boolean[];
    dateFormat?: string[];
    description?: string[];
    field?: string[];
    fullyQualifiedName?: string[];
    imageTemplate?: string[];
    isDerived?: boolean[];
    isMultiValue?: boolean[];
    label?: string[];
    linkTemplate?: string[];
    linkTemplateEnabled?: boolean[];
    linkTooltip?: string[];
    members?: WaveXmdDimensionMember[];
    origin?: string[];
    recordDisplayFields?: WaveXmdRecordDisplayLookup[];
    recordIdField?: string[];
    recordOrganizationIdField?: string[];
    salesforceActions?: WaveXmdDimensionSalesforceAction[];
    salesforceActionsEnabled?: boolean[];
    showDetailsDefaultFieldIndex?: number[];
    showInExplorer?: boolean[];
    sortIndex?: number[];
}

export interface WaveXmdDimensionCustomAction {
    customActionName?: string[];
    enabled?: boolean[];
    icon?: string[];
    method?: string[];
    sortIndex?: number[];
    target?: string[];
    tooltip?: string[];
    url?: string[];
}

export interface WaveXmdDimensionMember {
    color?: string[];
    label?: string[];
    member?: string[];
    sortIndex?: number[];
}

export interface WaveXmdDimensionSalesforceAction {
    enabled?: boolean[];
    salesforceActionName?: string[];
    sortIndex?: number[];
}

export interface WaveXmdFormattingBin {
    bin?: string[];
    formatValue?: string[];
    label?: string[];
    sortIndex?: number[];
}

export interface WaveXmdFormattingPredicate {
    formatValue?: string[];
    operator?: string[];
    sortIndex?: number[];
    value?: string[];
}

export interface WaveXmdFormattingProperty {
    formattingBins?: WaveXmdFormattingBin[];
    formattingPredicates?: WaveXmdFormattingPredicate[];
    property?: string[];
    referenceField?: string[];
    sortIndex?: number[];
    type?: string[];
}

export interface WaveXmdMeasure {
    conditionalFormatting?: WaveXmdFormattingProperty[];
    dateFormat?: string[];
    description?: string[];
    field?: string[];
    formatCustomFormat?: string[];
    formatDecimalDigits?: number[];
    formatIsNegativeParens?: boolean[];
    formatPrefix?: string[];
    formatSuffix?: string[];
    formatUnit?: string[];
    formatUnitMultiplier?: number[];
    fullyQualifiedName?: string[];
    isDerived?: boolean[];
    label?: string[];
    origin?: string[];
    showDetailsDefaultFieldIndex?: number[];
    showInExplorer?: boolean[];
    sortIndex?: number[];
}

export interface WaveXmdOrganization {
    instanceUrl?: string[];
    label?: string[];
    organizationIdentifier?: string[];
    sortIndex?: number[];
}

export interface WaveXmdRecordDisplayLookup {
    recordDisplayField?: string[];
}

export interface WebLink extends Metadata {
    availability?: WebLinkAvailability[];
    description?: string[];
    displayType?: WebLinkDisplayType[];
    encodingKey?: Encoding[];
    hasMenubar?: boolean[];
    hasScrollbars?: boolean[];
    hasToolbar?: boolean[];
    height?: number[];
    isResizable?: boolean[];
    linkType?: WebLinkType[];
    masterLabel?: string[];
    openType?: WebLinkWindowType[];
    page?: string[];
    position?: WebLinkPosition[];
    protected?: boolean[];
    requireRowSelection?: boolean[];
    scontrol?: string[];
    showsLocation?: boolean[];
    showsStatus?: boolean[];
    url?: string[];
    width?: number[];
}

export interface WebLinkTranslation {
    label?: string[];
    name?: string[];
}

export interface WebToCaseSettings {
    caseOrigin?: string[];
    defaultResponseTemplate?: string[];
    enableWebToCase?: boolean[];
}

export interface WeightedSourceCategory {
    sourceCategoryApiName?: string[];
    weight?: number[];
}

export interface WorkDotComSettings extends Metadata {
    enableCoachingManagerGroupAccess?: boolean[];
    enableGoalManagerGroupAccess?: boolean[];
    enableProfileSkills?: boolean[];
    enableProfileSkillsAddFeedPost?: boolean[];
    enableProfileSkillsAutoSuggest?: boolean[];
    enableProfileSkillsUsePlatform?: boolean[];
    enableWorkBadgeDefRestrictPref?: boolean[];
    enableWorkCalibration?: boolean[];
    enableWorkCanvasPref?: boolean[];
    enableWorkCertification?: boolean[];
    enableWorkCertificationNotification?: boolean[];
    enableWorkRewardsPref?: boolean[];
    enableWorkThanksPref?: boolean[];
    enableWorkUseObjectivesForGoals?: boolean[];
}

export interface Workflow extends Metadata {
    alerts?: WorkflowAlert[];
    fieldUpdates?: WorkflowFieldUpdate[];
    flowActions?: WorkflowFlowAction[];
    knowledgePublishes?: WorkflowKnowledgePublish[];
    outboundMessages?: WorkflowOutboundMessage[];
    rules?: WorkflowRule[];
    send?: WorkflowSend[];
    tasks?: WorkflowTask[];
}

export interface WorkflowAction extends Metadata {
}

export interface WorkflowActionReference {
    name?: string[];
    type?: WorkflowActionType[];
}

export interface WorkflowAlert extends WorkflowAction {
    ccEmails?: string[];
    description?: string[];
    protected?: boolean[];
    recipients?: WorkflowEmailRecipient[];
    senderAddress?: string[];
    senderType?: ActionEmailSenderType[];
    template?: string[];
}

export interface WorkflowEmailRecipient {
    field?: string[];
    recipient?: string[];
    type?: ActionEmailRecipientTypes[];
}

export interface WorkflowFieldUpdate extends WorkflowAction {
    description?: string[];
    field?: string[];
    formula?: string[];
    literalValue?: string[];
    lookupValue?: string[];
    lookupValueType?: LookupValueType[];
    name?: string[];
    notifyAssignee?: boolean[];
    operation?: FieldUpdateOperation[];
    protected?: boolean[];
    reevaluateOnChange?: boolean[];
    targetObject?: string[];
}

export interface WorkflowFlowAction extends WorkflowAction {
    description?: string[];
    flow?: string[];
    flowInputs?: WorkflowFlowActionParameter[];
    label?: string[];
    language?: string[];
    protected?: boolean[];
}

export interface WorkflowFlowActionParameter {
    name?: string[];
    value?: string[];
}

export interface WorkflowKnowledgePublish extends WorkflowAction {
    action?: KnowledgeWorkflowAction[];
    description?: string[];
    label?: string[];
    language?: string[];
    protected?: boolean[];
}

export interface WorkflowOutboundMessage extends WorkflowAction {
    apiVersion?: number[];
    description?: string[];
    endpointUrl?: string[];
    fields?: string[];
    includeSessionId?: boolean[];
    integrationUser?: string[];
    name?: string[];
    protected?: boolean[];
    useDeadLetterQueue?: boolean[];
}

export interface WorkflowRule extends Metadata {
    actions?: WorkflowActionReference[];
    active?: boolean[];
    booleanFilter?: string[];
    criteriaItems?: FilterItem[];
    description?: string[];
    formula?: string[];
    triggerType?: WorkflowTriggerTypes[];
    workflowTimeTriggers?: WorkflowTimeTrigger[];
}

export interface WorkflowSend extends WorkflowAction {
    action?: SendAction[];
    description?: string[];
    label?: string[];
    language?: string[];
    protected?: boolean[];
}

export interface WorkflowTask extends WorkflowAction {
    assignedTo?: string[];
    assignedToType?: ActionTaskAssignedToTypes[];
    description?: string[];
    dueDateOffset?: number[];
    notifyAssignee?: boolean[];
    offsetFromField?: string[];
    priority?: string[];
    protected?: boolean[];
    status?: string[];
    subject?: string[];
}

export interface WorkflowTaskTranslation {
    description?: string[];
    name?: string[];
    subject?: string[];
}

export interface WorkflowTimeTrigger {
    actions?: WorkflowActionReference[];
    offsetFromField?: string[];
    timeLength?: string[];
    workflowTimeTriggerUnit?: WorkflowTimeUnits[];
}

export interface WorkspaceMapping {
    fieldName?: string[];
    tab?: string[];
}
