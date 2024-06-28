# Angular Change Detection Strategies and Hierarchical Dependency Injection

## Change Detection Strategies

Angular provides two strategies for Change Detection:

1. **Default**: This is the strategy used by Angular out of the box. Whenever any change occurs (like click events, HTTP requests, etc.), Angular checks the entire component tree to see if any changes need to be reflected in the view. This can lead to performance issues in large applications as every minor change triggers a check on the entire component tree.

2. **OnPush**: This strategy tells Angular to run change detection on a component and its template only when it detects a change in the @Input() properties, or when an event is fired from within the component. This can lead to performance improvements in large applications as change detection is run less frequently.

### When to use each strategy

- **Default**: Use this strategy when your application is small to medium-sized and you don't have performance issues related to change detection. It's also useful when the components are stateful and depend on frequent updates.

- **OnPush**: Use this strategy when your application is large and you are facing performance issues. It's also useful when the components are mostly stateless and depend on @Input() properties, or when the components have clearly defined and limited interactions.

## Hierarchical Dependency Injection

Dependency Injection (DI) is a design pattern in which a class asks for dependencies from external sources rather than creating them itself. In Angular, providers are used to create and deliver dependencies.

Angular's DI system is hierarchical, meaning that it has a tree structure where dependencies can be injected at different levels:

- **Root Level**: When a service is provided at the root level (usually in the AppModule), it's available throughout the application. This is useful when you need a single, shared instance of a service across your entire app.

- **Component Level**: When a service is provided at a component level, a new instance of the service is created for that component and its child components. This is useful when you need a service to retain state for a component tree, or when you need different instances of a service for different parts of your app.

### Benefits of Hierarchical DI

- **Modularity and Component Isolation**: By providing services at different levels, you can ensure that each part of your app gets what it needs without affecting other parts.

- **State Management**: Hierarchical DI can be used to manage state at different levels of your app. For example, you can use a service to share state across components, or to isolate state within a component tree.

- **Efficiency**: By creating service instances only when and where they're needed, you can make your app more efficient.

### Use Cases for Hierarchical DI

- **Shared Services**: If you have a service that needs to be shared across many components, provide it at the root level.

- **Component-Specific Services**: If you have a service that's specific to a component and its children, provide it at the component level.

- **Scoped Services**: If you have a service that needs to maintain separate state for different parts of your app, provide it at the component level where each part begins.
