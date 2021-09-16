"use strict";(self.webpackChunkrancher_docusaurus=self.webpackChunkrancher_docusaurus||[]).push([[63125],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"Intro",position:1},c=void 0,u={unversionedId:"security/index",id:"security/index",isDocsHomePage:!1,title:"Intro",description:"\\",source:"@site/docs/security/index.md",sourceDirName:"security",slug:"/security/index",permalink:"/rancher-docusaurus/next/security/index",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/security/index.md",tags:[],version:"current",frontMatter:{title:"Intro",position:1},sidebar:"tutorialSidebar",previous:{title:"Rancher CVEs and Resolutions",permalink:"/rancher-docusaurus/next/security/cve"},next:{title:"CIS 1.5 Benchmark - Self-Assessment Guide - Rancher v2.5",permalink:"/rancher-docusaurus/next/security/rancher-2.5/1.5-benchmark-2.5"}},l=[{value:"Running a CIS Security Scan on a Kubernetes Cluster",id:"running-a-cis-security-scan-on-a-kubernetes-cluster",children:[]},{value:"SELinux RPM",id:"selinux-rpm",children:[]},{value:"Rancher Hardening Guide",id:"rancher-hardening-guide",children:[]},{value:"The CIS Benchmark and Self-Assessment",id:"the-cis-benchmark-and-self-assessment",children:[]},{value:"Third-party Penetration Test Reports",id:"third-party-penetration-test-reports",children:[]},{value:"Rancher CVEs and Resolutions",id:"rancher-cves-and-resolutions",children:[]}],h={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'\\<table width="100%"',">",'\n\\<tr style="vertical-align: top;"',">",'\n\\<td width="30%" style="border: none;"',">","\n\\<h4",">","Security policy\\</h4",">",'\n\\<p style="padding: 8px"',">","Rancher Labs supports responsible disclosure, and endeavours to resolve all issues in a reasonable time frame. \\</p",">","\n\\</td",">",'\n\\<td width="30%" style="border: none;"',">","\n\\<h4",">","Reporting process\\</h4",">",'\n\\<p style="padding: 8px"',">",'Please submit possible security issues by emailing \\<a href="mailto:',(0,s.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),'"',">",(0,s.kt)("a",{parentName:"p",href:"mailto:security@rancher.com"},"security@rancher.com"),"\\</a",">","\\</p",">","\n\\</td",">",'\n\\<td width="30%" style="border: none;"',">","\n\\<h4",">","Announcements\\</h4",">",'\n\\<p style="padding: 8px"',">",'Subscribe to the \\<a href="',(0,s.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements%22%5C%3ERancher"},'https://forums.rancher.com/c/announcements"\\>Rancher')," announcements forum\\</a",">"," for release updates.\\</p",">","\n\\</td",">","\n\\</tr",">","\n\\</table",">"),(0,s.kt)("p",null,"Security is at the heart of all Rancher features. From integrating with all the popular authentication tools and services, to an enterprise grade ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac"},"RBAC capability,")," Rancher makes your Kubernetes clusters even more secure."),(0,s.kt)("p",null,"On this page, we provide security-related documentation along with resources to help you secure your Rancher installation and your downstream Kubernetes clusters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#running-a-cis-security-scan-on-a-kubernetes-cluster"},"Running a CIS security scan on a Kubernetes cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#selinux-rpm"},"SELinux RPM")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-hardening-guide"},"Guide to hardening Rancher installations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#the-cis-benchmark-and-self-assessment"},"The CIS Benchmark and self-assessment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#third-party-penetration-test-reports"},"Third-party penetration test reports")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-cves-and-resolutions"},"Rancher CVEs and resolutions"))),(0,s.kt)("h3",{id:"running-a-cis-security-scan-on-a-kubernetes-cluster"},"Running a CIS Security Scan on a Kubernetes Cluster"),(0,s.kt)("p",null,"Rancher leverages ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench"},"kube-bench")," to run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS (Center for Internet Security) Kubernetes Benchmark."),(0,s.kt)("p",null,"The CIS Kubernetes Benchmark is a reference document that can be used to establish a secure configuration baseline for Kubernetes."),(0,s.kt)("p",null,"The Center for Internet Security (CIS) is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace."'),(0,s.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,s.kt)("p",null,"The Benchmark provides recommendations of two types: Scored and Not Scored. We run tests related to only Scored recommendations."),(0,s.kt)("p",null,"When Rancher runs a CIS security scan on a cluster, it generates a report showing the results of each test, including a summary with the number of passed, skipped and failed tests. The report also includes remediation steps for any failed tests."),(0,s.kt)("p",null,"For details, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cis-scans"},"security scans.")),(0,s.kt)("h3",{id:"selinux-rpm"},"SELinux RPM"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8."),(0,s.kt)("p",null,"We provide two RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"rke2-selinux"),". For details, see ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/security/selinux"},"this page.")),(0,s.kt)("h3",{id:"rancher-hardening-guide"},"Rancher Hardening Guide"),(0,s.kt)("p",null,'The Rancher Hardening Guide is based on controls and best practices found in the \\<a href="',(0,s.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/benchmark/kubernetes/%22"},'https://www.cisecurity.org/benchmark/kubernetes/"'),' target="_blank"',">","CIS Kubernetes Benchmark\\</a",">"," from the Center for Internet Security."),(0,s.kt)("p",null,"The hardening guides provide prescriptive guidance for hardening a production installation of Rancher. See Rancher's guides for ",(0,s.kt)("a",{parentName:"p",href:"#the-cis-benchmark-and-self-sssessment"},"Self Assessment of the CIS Kubernetes Benchmark")," for the full list of security controls."),(0,s.kt)("p",null,">"," The hardening guides describe how to secure the nodes in your cluster, and it is recommended to follow a hardening guide before installing Kubernetes."),(0,s.kt)("p",null,"Each version of the hardening guide is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher."),(0,s.kt)("h3",{id:"the-cis-benchmark-and-self-assessment"},"The CIS Benchmark and Self-Assessment"),(0,s.kt)("p",null,"The benchmark self-assessment is a companion to the Rancher security hardening guide. While the hardening guide shows you how to harden the cluster, the benchmark guide is meant to help you evaluate the level of security of the hardened cluster."),(0,s.kt)("p",null,"Because Rancher and RKE install Kubernetes services as Docker containers, many of the control verification checks in the CIS Kubernetes Benchmark don't apply. This guide will walk through the various controls and provide updated example commands to audit compliance in Rancher created clusters. The original benchmark documents can be downloaded from the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/benchmark/kubernetes/"},"CIS website"),"."),(0,s.kt)("p",null,"Each version of Rancher's self-assessment guide corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark."),(0,s.kt)("h3",{id:"third-party-penetration-test-reports"},"Third-party Penetration Test Reports"),(0,s.kt)("p",null,"Rancher periodically hires third parties to perform security audits and penetration tests of the Rancher 2.x software stack. The environments under test follow the Rancher provided hardening guides at the time of the testing. Results are posted when the third party has also verified fixes classified MEDIUM or above."),(0,s.kt)("p",null,"Results:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf"},"Cure53 Pen Test - 7/2019")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf"},"Untamed Theory Pen Test- 3/2019"))),(0,s.kt)("h3",{id:"rancher-cves-and-resolutions"},"Rancher CVEs and Resolutions"),(0,s.kt)("p",null,"Rancher is committed to informing the community of security issues in our products. For the list of CVEs (Common Vulnerabilities and Exposures) for issues we have resolved, refer to ",(0,s.kt)("a",{parentName:"p",href:"./cve"},"this page.")))}d.isMDXComponent=!0}}]);