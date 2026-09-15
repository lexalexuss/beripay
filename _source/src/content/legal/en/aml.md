---
title: "AML & Compliance Policy"
---

**Status of the Service.** “BeriPay” (“Бери и плати”) is an information technology service. The Rightholder and the Administrator are not a bank, a credit institution, a payment system or an issuer of payment cards. The Virtual Card is issued and serviced by issuing partners / card program operators (including BIN partners) under their rules and the Public Offer. This Policy describes the compliance measures of the Service and the requirements for the User; it does not create obligations of a banking / licensed AML regime beyond applicable law and agreements with partners.

This Policy forms part of the contractual framework of the Service together with the Public Offer ([https://beripay.net/terms](https://beripay.net/terms)). Acceptance of the Offer (acceptance by way of registration in the Service) means that the User has read this Policy and undertakes to comply with the identification, screening and monitoring requirements applied by the Rightholder and the Administrator.

## 1. Purpose and Scope
1.1. The purpose of the Policy is to prevent the use of the BeriPay service (hereinafter, the Service, BeriPay) for:

- the legalisation (laundering) of proceeds of crime (ML / Money Laundering);
- terrorist financing (TF / Terrorist Financing);
- financing of the proliferation of weapons of mass destruction (PF / Proliferation Financing, CPF);
- circumvention of international and local sanctions;
- fraud, financing of prohibited activities and other financial crimes.

1.2. The Policy applies to:

- individual Users of the Service (including the Telegram bot and the mini app);
- employees, contractors and authorised representatives of the Rightholder and the Administrator involved in onboarding, payments, support and risk;
- the processes of issuing and using the Virtual Card, top-ups by the methods available in the Service (including SBP (Faster Payments System) and cryptocurrency top-ups, where enabled), transaction monitoring and access restrictions;
- interaction with card issuing partners (card program / BIN partners), processors, KYC/AML providers, payment and crypto partners.

1.3. The Service provides information technology functionality for payments outside the Russian Federation by means of the Virtual Card on the terms of the Offer. The product model is card payments (spend); cash withdrawal / ATM and withdrawal to bank accounts are not functions of the Service (see also clause 5.7 of the Offer). The Rightholder has the right to engage third parties to perform its obligations (clause 2.2 of the Offer). The requirements of applicable law and of issuing partners / payment programs are reflected in the onboarding, limits and monitoring processes of the Service; the User is obliged to assist in their fulfilment.

1.4. This Policy does not promise or guarantee approval of any application for verification, card issuance or execution of a transaction. The Rightholder reserves the right to refuse service, restrict or terminate access on risk grounds (see Sections 8–11), including with reference to clauses 3.6, 5.5 and 5.6 of the Offer.

## 2. Regulatory and Methodological Framework
The compliance programme is built on a risk-based approach and is guided by:

- the FATF Recommendations (including AML, CFT and CPF measures);
- applicable Hong Kong requirements for combating financial crime within the framework of the Rightholder’s model and agreements with payment / issuing partners — without claiming the status of a licensed bank / SVF / MSO, unless such status has been separately confirmed;
- where applicable — the requirements of the Administrator’s jurisdiction (the Kyrgyz Republic) within the scope of its role under the Offer; without claiming the full regime of a regulated financial institution of the Russian Federation or the Kyrgyz Republic in the absence of the relevant licence;
- the requirements of issuing partners and applicable payment schemes (to the extent that the partner card program is connected to them);
- best practices of prepaid / virtual card access programs: Customer Due Diligence (CDD), Enhanced Due Diligence (EDD), sanctions and PEP screening, ongoing monitoring, record keeping, staff training;
- agreements and policies of engaged identity verification providers (including Sumsub or equivalent) and transaction monitoring / blockchain analytics providers (where crypto top-up is used).

In the event of conflicting requirements, the stricter applicable rule or contractual requirement of the issuing partner prevails.

## 3. Programme Management (Governance)
3.1. A responsible person (Compliance / AML Officer or an equivalent function) is appointed, who is responsible for:

- maintaining this Policy and internal procedures;
- coordinating CDD/EDD, sanctions/PEP screening and investigations;
- escalating suspicious activity;
- interacting with partners and, if and when required by applicable law or by an agreement with a regulated partner, transmitting information through the channels provided for by the partner / authorised person — without claiming that the Service independently files regulatory reports in all jurisdictions;
- tracking and controlling record retention periods.

3.2. The management of the Rightholder / the authorised body provides resources, approves the Policy and periodically reviews the effectiveness of the programme (at least once a year or upon a material change in the product, geography or partners).

3.3. Support and product teams may not bypass compliance decisions for the sake of conversion. Identity verification statuses (including “resubmission” / “rejection” / “under review”) and card restrictions take precedence over marketing promises.

3.4. Disclosure to the User or to third parties of the fact of an internal investigation, of the filing of a suspicious transaction report or of requests from competent authorities (tipping-off) is prohibited, except in cases expressly provided for by applicable law.

## 4. Risk-Based Approach (RBA)
4.1. Before service is provided and in the course of servicing, the risk of the customer and of transactions is assessed, taking into account, at a minimum:

| Factor | Examples of indicators |
| :---- | :---- |
| Customer | profile inconsistency, refusal to undergo KYC, PEP, adverse media, data mismatch |
| Geography | high-risk / sanctioned jurisdictions; mismatch between declared residence and patterns |
| Product / channel | virtual card, remote onboarding (Telegram), crypto top-up (higher risk by default), SBP |
| Transactions | velocity, volume, splitting, circular patterns, atypical MCCs, anonymous funds |
| Source of funds | opacity of SoF/SoW, links to mixers / darknet / high-risk VASPs |

4.2. Customers and scenarios are assigned a risk class (at a minimum: low / medium / high). High risk entails EDD, enhanced monitoring, limits, manual review or refusal.

4.3. The product risk assessment is reviewed upon the launch of new top-up methods, new markets or partners, or upon material changes to tariffs / limits.

## 5. Customer Identification and Due Diligence (KYC / CDD)
5.1. In accordance with clause 3.6 of the Offer, verification is carried out at the request of the Rightholder and/or the Administrator. In addition, the Service has the right (and may be obliged under the requirements of the issuing partner) to require KYC before card issuance, before restrictions are lifted and/or when risk thresholds are exceeded. The actual timing of the request depends on the product configuration, partner requirements and risk appetite.

5.2. CDD standard for an individual (the scope may be extended by the provider / partner):

- full name, date of birth, citizenship / nationality;
- an identity document (passport, ID card or other acceptable document);
- liveness check / biometric liveness (where applicable);
- residential address and/or a document confirming the address (depending on risk class and upon request);
- contact details consistent with the Account in the Service / Telegram;
- in the case of elevated risk / upon request — information on the purpose of using the card and the source of funds.

5.3. Verification is carried out using specialised providers (in the BeriPay product configuration — Sumsub or equivalent), as well as controls of the Rightholder and of issuing partners. A Sumsub decision does not equal automatic approval by the Rightholder. The outcome “approved / resubmission / rejection / under review” is a compliance decision, not a technical formality.

5.4. The User is obliged to keep data up to date (clause 3.8 of the Offer). Incorrect, forged or incomplete information constitutes grounds for blocking, EDD or refusal.

5.5. Registration in the Service is available to adult persons with legal capacity (clause 1.4 of the Offer). Accounts of minors and of “nominee” third parties, as well as the shared use of Accounts, are prohibited.

5.6. BeriPay applies a selective approach: applications that are opaque, high-risk or inconsistent with the risk appetite are not serviced, even if the formal fields have been completed.

## 6. Enhanced Due Diligence (EDD)
EDD is applied, in particular, in cases of:

- PEP status (see Section 7) or links to PEPs;
- matches / near matches against sanctions or other restrictive lists (until they are resolved);
- customers from / connected with high-risk jurisdictions;
- large, atypical or complex top-up structures (including crypto);
- adverse media relating to financial crime, corruption or sanctions risks;
- requests to lift limits, atypical activity or inconsistency with the declared purpose of use.

As part of EDD, the Service has the right to request the Source of Funds (SoF) and/or the Source of Wealth (SoW), proof of address, additional documents and explanations regarding transactions. Refusal to provide information = grounds for restriction / refusal of service.

## 7. Politically Exposed Persons (PEP)
7.1. A PEP is an individual who holds or has held a prominent public (including international) position, including, without limitation: heads of state and government, ministers and their deputies, members of parliament, senior officials of the judiciary and the military, heads of state-owned enterprises, heads of political parties, as well as persons performing public functions in international organisations — to the extent applied by the FATF and by the screening lists used.

7.2. PEP risk also covers:

- family members of PEPs;
- close business / personal associates (RCA — Relatives and Close Associates).

7.3. An identified PEP / RCA is subject to:

- mandatory EDD;
- approval at a higher level (senior / compliance approval);
- establishment of the source of funds and the nature of the expected activity;
- enhanced ongoing monitoring.

7.4. PEP status does not mean automatic acceptance. BeriPay has the right to refuse if the risk cannot be acceptably mitigated.

## 8. Sanctions, Terrorism, Lists of Prohibited Persons
8.1. Customers (and, where applicable, related data) are screened against restrictive and risk lists, including (to the extent available through the screening provider and under partner requirements):

- UN lists (including those related to terrorism and proliferation financing);
- OFAC (USA) and other applicable US lists;
- EU, UK and Hong Kong lists and other applicable local lists;
- PEP / adverse media / enforcement databases;
- internal stop-lists of the Rightholder and of issuing partners.

8.2. Screening is performed:

- at onboarding / verification;
- on a periodic / event-driven basis (list updates, changes in customer data);
- upon material life-cycle events (card issuance/reissuance, large top-ups, escalations).

8.3. A confirmed or reasonably unresolvable match against sanctions / terrorist lists results in:

- refusal of onboarding or immediate restriction / blocking of access;
- a prohibition on carrying out transactions;
- internal escalation and the actions provided for by applicable law and agreements with partners (without tipping-off).

8.4. The Service is not intended for persons and transactions aimed at circumventing sanctions (including the use of third parties, splitting, “intermediary layers”, false payment purposes).

## 9. Transaction Monitoring (Ongoing Monitoring / KYT)
9.1. After a business relationship has been established, the customer’s transactions and behaviour are monitored for suspicious patterns, including those typical of prepaid / virtual cards:

- rapid exhaustion of a large limit immediately after onboarding;
- structuring (splitting) of top-ups and spending;
- inconsistency of spending with the declared profile / geography;
- multiple accounts, device/payment overlap, referral abuse with signs of fraud;
- attempts to withdraw funds, make P2P transfers or carry out other transactions circumventing product restrictions, including the prohibition on withdrawal to bank accounts / other matters under clause 5.7 of the Offer (withdrawal to banks and cash withdrawal / ATM are not functions of the Service);
- for crypto top-ups — indicators of high-risk sources (mixers, darknet, sanctioned clusters) based on the blockchain analytics data of partners (where connected).

9.2. Alerts are reviewed by authorised employees. Possible outcomes: closing the alert with a rationale, requesting documents (EDD), restricting functionality, blocking, preparing an internal case for reporting through a partner / under applicable law.

9.3. The Rightholder has the right to suspend a Transfer / access if the unlawful nature of transactions, hacking or falsification is suspected, or on other grounds under clauses 5.5 and 5.6 of the Offer.

## 10. Prohibited Uses and Refusal of Service
Without this list being exhaustive, it is prohibited to use the Service for:

- financing of terrorism, extremism or proliferation;
- money laundering, concealment of the origin of funds, operating “through nominees”;
- circumvention of sanctions and export restrictions;
- fraud, purchase of stolen card data, carding;
- illegal drugs, illicit arms trafficking, human trafficking, sexual exploitation of minors;
- unlicensed gambling / betting where prohibited by applicable law or partner policy;
- cash withdrawal / ATM, withdrawal to bank accounts and other transactions circumventing clause 5.7 of the Offer and the spend-only product model;
- other activities that are illegal or prohibited by issuing partners.

The Rightholder has the right to refuse card issuance, a top-up, the execution of a transaction or the continuation of service without explaining the details of compliance algorithms, if this is necessary to protect the programme and to comply with law / partner requirements.

## 11. Restrictions, Blocking, User Cooperation
11.1. Possible measures: limits, holds on transactions, suspension of Transfers, blocking of the Account / card, a requirement to undergo or repeat KYC, a request for SoF/SoW, as well as refusal, delay or restriction of a refund in the cases and in the manner set out in Section 6 of the Offer and in the presence of legal / sanctions / anti-fraud impediments.

11.2. The User is obliged, upon request, to provide documents and explanations within a reasonable time. Failure to provide = risk of restriction of the service.

11.3. Refunds of funds are governed by Section 6 of the Offer and are made taking into account fees / costs and applicable compliance restrictions. The existence of a refund request does not cancel the obligation to undergo verification and does not prevent the withholding/freezing of funds if this is required by law or by a partner.

## 12. Partners, Issuers and Providers
12.1. BeriPay is selective with respect to partners: card issuing partners, processors, KYC/AML and KYT providers undergo due diligence; the agreements set out control obligations, the right to request information / to control the quality of screening to the extent agreed in the agreement (if provided for), escalations, and a prohibition on weakening screening without written consent.

12.2. The Service focuses on partners with comparable AML/CFT standards (RBA, sanctions/PEP, CDD/EDD, monitoring, training, record keeping, prohibition of tipping-off). Partners that systematically bypass screening or position themselves as “no KYC” do not fit the risk appetite of the programme.

12.3. Technology providers (including Sumsub) do not relieve the Rightholder of the obligation to organise an adequate programme and do not confer on the Service the licensed status of a financial institution. High-risk decisions remain with the compliance function and/or the issuing partner in accordance with the agreement.

## 13. Data Retention and Confidentiality
13.1. CDD/EDD materials, screening results, monitoring alerts and related decisions are retained, as a rule, for at least 5 (five) years after the end of the relationship with the customer or for another period established by the applicable law of the Rightholder / Administrator / by the agreement with the partner — the longer of the applicable periods applies.

13.2. Personal and biometric data are processed in accordance with the [Privacy Policy](https://beripay.net/privacy-policy) and the consents requested during KYC.

13.3. Access to compliance data is granted on a need-to-know basis.

## 14. Training and Independent Review
14.1. Employees involved with customers, payments, support and product undergo induction and periodic (at least annual) training on AML/CFT, sanctions, PEPs, virtual card red flags and the prohibition of tipping-off.

14.2. The effectiveness of the programme is periodically assessed by internal and/or external review; findings are addressed in accordance with a remediation plan. The public Policy does not promise an annual external audit unless one is actually carried out.

## 15. Suspicious Activity Reporting
Where grounds indicating suspicious activity are identified, the Service ensures internal recording and escalation. Information is transmitted to regulators / competent authorities in accordance with applicable law and/or through regulated issuing partners / payment partners, if this is provided for by the agreements. The content and the fact of such actions are not disclosed to the User (prohibition of tipping-off), except in cases expressly required by law.

## 16. Amendments to the Policy
16.1. The current version is published on the BeriPay website (AML / Compliance section) and/or in the Service.

16.2. Material changes to the programme may be accompanied by updates to internal procedures and to the requirements for Users under the Offer. The User is obliged to comply with the current version of the Policy when continuing to use the Service.

16.3. For questions regarding the Policy: compliance@beripay.net
