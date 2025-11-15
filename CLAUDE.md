# CLAUDE.md - AI Assistant Guide for website-perumahan

## Project Overview

**Project Name:** Website Perumahan (Housing/Property Website)
**Repository:** avarice27/website-perumahan
**Status:** Initial Setup Phase

This is a housing/property website project designed to showcase residential properties, provide information about housing developments, and facilitate property searches.

## Repository Status

This repository is currently in its initial setup phase. As development progresses, this document will be updated to reflect the actual codebase structure and conventions.

## Recommended Project Structure

Based on the project name and common web development practices, the following structure is recommended:

```
website-perumahan/
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components/routes
│   ├── assets/            # Images, fonts, static files
│   ├── styles/            # CSS/SCSS files
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks (if using React)
│   ├── services/          # API services and data fetching
│   └── types/             # TypeScript type definitions
├── public/                # Public static files
├── tests/                 # Test files
├── docs/                  # Documentation
├── .github/               # GitHub workflows and templates
└── config/                # Configuration files
```

## Technology Stack

### Recommended Technologies (To Be Confirmed)

- **Frontend Framework:** React, Next.js, or Vue.js
- **Styling:** Tailwind CSS, CSS Modules, or Styled Components
- **Language:** TypeScript (recommended) or JavaScript
- **Build Tool:** Vite, Webpack, or Next.js built-in
- **Package Manager:** npm, yarn, or pnpm
- **Testing:** Jest, Vitest, React Testing Library
- **Linting:** ESLint + Prettier

## Development Workflows

### Git Workflow

1. **Branch Naming Convention:**
   - Feature branches: `feature/<feature-name>`
   - Bug fixes: `bugfix/<bug-name>`
   - Hotfixes: `hotfix/<issue-name>`
   - AI-assisted branches: `claude/<session-id>`

2. **Commit Message Format:**
   ```
   <type>: <subject>

   <body>
   ```

   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

   Examples:
   - `feat: add property listing page`
   - `fix: correct image loading on mobile devices`
   - `docs: update installation instructions`

3. **Pull Request Process:**
   - Create PR with descriptive title and summary
   - Include test plan and screenshots if applicable
   - Request review from team members
   - Ensure CI/CD checks pass before merging

### Code Quality Standards

1. **Code Style:**
   - Use consistent indentation (2 spaces recommended)
   - Follow ESLint and Prettier configurations
   - Use meaningful variable and function names
   - Add comments for complex logic

2. **Component Guidelines:**
   - Keep components small and focused (Single Responsibility Principle)
   - Use functional components with hooks (if React)
   - Properly type props and state (if TypeScript)
   - Extract reusable logic into custom hooks or utilities

3. **File Organization:**
   - Group related files together
   - Use index files for cleaner imports
   - Keep file names consistent (kebab-case or PascalCase based on convention)

## Key Conventions for AI Assistants

### 1. Code Generation Principles

- **Security First:** Always validate user inputs, sanitize data, and prevent XSS, SQL injection, and other vulnerabilities
- **Accessibility:** Follow WCAG guidelines, use semantic HTML, proper ARIA labels
- **Performance:** Optimize images, lazy load components, minimize bundle size
- **Responsiveness:** Ensure mobile-first design, test on multiple screen sizes
- **SEO:** Include proper meta tags, structured data, semantic HTML

### 2. When Adding Features

Before implementing new features:

1. **Understand Context:**
   - Review existing similar components/patterns
   - Check for existing utilities or libraries that can be reused
   - Understand the current state management approach

2. **Plan Implementation:**
   - Break down into smaller tasks
   - Consider edge cases and error handling
   - Plan for testing

3. **Follow Patterns:**
   - Match existing code style and patterns
   - Use established project conventions
   - Maintain consistency with current architecture

### 3. When Fixing Bugs

1. **Diagnose First:**
   - Reproduce the issue
   - Identify root cause
   - Check for similar issues elsewhere

2. **Fix Thoroughly:**
   - Fix the root cause, not just symptoms
   - Add tests to prevent regression
   - Update documentation if needed

3. **Test Comprehensively:**
   - Verify the fix works
   - Check for side effects
   - Test edge cases

### 4. File References

When referencing code, always use the format: `file_path:line_number`

Example: "The property listing component is defined in `src/components/PropertyCard.tsx:15`"

### 5. Dependencies and Packages

- **Before adding new dependencies:**
  - Check if existing packages can solve the problem
  - Consider bundle size impact
  - Verify package is actively maintained
  - Check for security vulnerabilities

- **Updating dependencies:**
  - Review changelog for breaking changes
  - Update incrementally when possible
  - Test thoroughly after updates

### 6. Configuration Files

Common configuration files to be aware of:

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.*` - Linting rules
- `.prettierrc` - Code formatting rules
- `vite.config.*` / `next.config.*` - Build configuration
- `.env.*` - Environment variables (never commit secrets!)

### 7. Testing Guidelines

- Write tests for new features
- Update tests when modifying existing code
- Aim for meaningful test coverage
- Test user interactions, not implementation details
- Include edge cases and error scenarios

### 8. Documentation

- Update README.md for setup and usage instructions
- Document complex algorithms or business logic
- Add JSDoc comments for public APIs
- Keep this CLAUDE.md updated as the project evolves

## Common Tasks

### Setting Up Development Environment

```bash
# Clone repository
git clone <repository-url>
cd website-perumahan

# Install dependencies
npm install  # or yarn/pnpm

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Creating a New Component

1. Create component file in appropriate directory
2. Define component with proper TypeScript types
3. Add styles (inline, module, or styled-components)
4. Write tests for the component
5. Export from index file if using barrel exports
6. Document props and usage

### Adding a New Page

1. Create page component in `src/pages/`
2. Set up routing (if applicable)
3. Add SEO meta tags
4. Implement responsive layout
5. Add loading and error states
6. Test on multiple devices

### Working with APIs

1. Define API endpoints in `src/services/`
2. Create proper TypeScript interfaces for responses
3. Handle loading, success, and error states
4. Implement proper error handling
5. Add request/response caching if needed
6. Consider rate limiting and retry logic

## Property Website Specific Considerations

### Property Listing Features

- **Property Cards:** Display key info (price, location, size, images)
- **Filters:** Location, price range, property type, bedrooms, amenities
- **Search:** Text search with autocomplete
- **Sorting:** By price, date, popularity
- **Map Integration:** Show properties on map
- **Image Gallery:** Multiple images with lightbox
- **Virtual Tours:** 360° views or video tours

### Data Structure Examples

```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  location: {
    address: string;
    city: string;
    province: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specifications: {
    landArea: number;
    buildingArea: number;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    carports: number;
  };
  images: string[];
  amenities: string[];
  propertyType: 'house' | 'apartment' | 'land' | 'commercial';
  status: 'available' | 'sold' | 'reserved';
  listedDate: Date;
  agent?: {
    name: string;
    contact: string;
    photo?: string;
  };
}
```

### Localization

Since "perumahan" is Indonesian, consider:
- Multi-language support (Indonesian/English)
- Indonesian currency (Rupiah - IDR)
- Local address formats
- Indonesian property terminology

## Security Considerations

1. **Input Validation:**
   - Sanitize all user inputs
   - Validate email, phone numbers
   - Prevent XSS attacks

2. **Authentication & Authorization:**
   - Secure user authentication
   - Role-based access control
   - Protect sensitive routes

3. **Data Protection:**
   - HTTPS only
   - Secure cookie handling
   - Don't expose sensitive data in client-side code
   - Environment variables for secrets

4. **API Security:**
   - Rate limiting
   - CORS configuration
   - API authentication tokens
   - Input validation on backend

## Performance Optimization

1. **Images:**
   - Optimize and compress images
   - Use responsive images with srcset
   - Lazy load images below the fold
   - Consider modern formats (WebP, AVIF)

2. **Code Splitting:**
   - Route-based code splitting
   - Lazy load heavy components
   - Dynamic imports for non-critical code

3. **Caching:**
   - Browser caching headers
   - Service worker for offline support
   - API response caching
   - CDN for static assets

4. **Bundle Optimization:**
   - Tree shaking
   - Minification
   - Remove unused dependencies
   - Analyze bundle size regularly

## Accessibility Guidelines

1. **Semantic HTML:** Use proper heading hierarchy, landmarks
2. **Keyboard Navigation:** All interactive elements accessible via keyboard
3. **Screen Readers:** Proper ARIA labels, alt text for images
4. **Color Contrast:** WCAG AA minimum (4.5:1 for text)
5. **Focus Indicators:** Visible focus states
6. **Form Labels:** Proper label associations
7. **Error Messages:** Clear, descriptive error messages

## Deployment

### Pre-deployment Checklist

- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Responsive design verified
- [ ] Accessibility audit completed
- [ ] Performance metrics acceptable
- [ ] SEO meta tags in place
- [ ] Environment variables configured
- [ ] Security headers configured
- [ ] Analytics tracking implemented

### Deployment Platforms (Suggestions)

- **Vercel** - Excellent for Next.js
- **Netlify** - Great for static sites and SPAs
- **AWS** - Scalable, full control
- **Google Cloud Platform** - Good for complex applications
- **DigitalOcean** - Simple, cost-effective

## Resources and References

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [Wave](https://wave.webaim.org/) - Accessibility testing

## Updates and Maintenance

**Last Updated:** 2025-11-15
**Status:** Initial version for empty repository

### Update History

- **2025-11-15:** Initial CLAUDE.md created for empty repository
  - Established project structure recommendations
  - Defined coding conventions and workflows
  - Added property website specific guidelines

---

## Notes for AI Assistants

This document will evolve as the project develops. When working on this repository:

1. **First Time:** Review this entire document
2. **Before Each Task:** Check relevant sections
3. **After Significant Changes:** Update this document
4. **Regular Maintenance:** Keep conventions and examples current

Always prioritize:
- Code quality and maintainability
- User experience and accessibility
- Security and performance
- Clear documentation and communication

When in doubt, ask the user for clarification rather than making assumptions about project requirements or architectural decisions.
