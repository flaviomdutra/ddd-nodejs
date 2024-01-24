# Domain-Driven Design (DDD) Overview

The **Domain-Driven Design (DDD)** is a set of principles for software projects conceptualized by Eric Evans and formalized in his 2003 book of the same name.

## Key Principles of DDD

**Focus on Core Domain and Domain Logic**
- DDD emphasizes the central objective of developing systems with a design centered around concepts closely aligned with the complexities and nuances of the problem domain, rather than merely addressing technical challenges.

**Understanding the Domain**
- The domain of a system encompasses the business area and problem it aims to solve.
- DDD advocates for developers to possess a deep understanding of the system's domain, acquired through frequent conversations with domain experts. The system's design should align with the domain rather than conforming to specific programming technologies.

**Separation of Domain and Technology**
DDD promotes the separation of domain and technology, expressed in the system's architecture. Architectural patterns such as Layered Architecture, Clean Architecture, or Hexagonal Architecture can be employed for this purpose.

**Ubiquitous Language** is a key concept in DDD, involving a set of terms that must be fully understood by both domain experts and the development team (programmers, QA, UX).
Successful software projects require a shared language between domain experts and developers, constituting the Ubiquitous Language of the system.

**Bounded Contexts** represent logical boundaries within which a specific domain model is defined, and business rules are consistently applied. Each delimited context is autonomous and independent, allowing for better organization and code scalability.

Within a bounded context, entities, aggregates, services, and business rules relevant to that specific domain are defined. Clear definition of context boundaries is crucial to avoid conflicts and ambiguities in the code.

## Setup

Follow these steps to set up the project:

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:flaviomdutra/ddd-nodejs.git
   ```

2. **Install Dependencies:** We are using PNPM for package management. If you haven't installed it yet, you can do so with `npm install -g pnpm`. After that, you can install the dependencies with:
   ```bash
   pnpm install
   ```

## Applicability

### When to Apply DDD
- DDD is particularly beneficial in systems with complex domains, where business rules are challenging to grasp immediately and intricate for developers to implement.
- DDD is also useful in projects with a large development team, where a shared language is essential to ensure everyone is on the same page.
- DDD is also recommended for projects with a long lifespan, where the domain is likely to evolve over time.

### When Not to Apply DDD
- DDD is not recommended for simple systems with a straightforward domain, where the business rules are easy to understand and implement.
- DDD is also not recommended for projects with a small development team, where a shared language is not as crucial.
- DDD is also not recommended for projects with a short lifespan, where the domain is unlikely to evolve over time.
