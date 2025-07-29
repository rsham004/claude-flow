# OpenCode Platform API Specification

## 📋 API Overview

### Base Information
- **Version**: v1
- **Base URL**: `https://api.opencode.education/v1`
- **Protocol**: HTTPS only
- **Authentication**: JWT Bearer tokens
- **Content Type**: `application/json`
- **Rate Limiting**: 1000 requests/hour per user

### OpenAPI Specification

```yaml
openapi: 3.0.3
info:
  title: OpenCode Platform API
  description: Comprehensive API for the OpenCode learning platform
  version: 1.0.0
  contact:
    name: OpenCode Support
    email: api-support@opencode.education
    url: https://docs.opencode.education

servers:
  - url: https://api.opencode.education/v1
    description: Production server
  - url: https://staging-api.opencode.education/v1
    description: Staging server
  - url: http://localhost:3000/v1
    description: Development server

security:
  - bearerAuth: []

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key

  schemas:
    # User Management
    User:
      type: object
      required: [id, email, username, role]
      properties:
        id:
          type: string
          format: uuid
          description: Unique user identifier
        email:
          type: string
          format: email
          description: User email address
        username:
          type: string
          minLength: 3
          maxLength: 30
          pattern: '^[a-zA-Z0-9_-]+$'
          description: Unique username
        fullName:
          type: string
          maxLength: 255
          description: Full name of the user
        role:
          type: string
          enum: [student, instructor, teaching_assistant, admin]
          description: User role in the platform
        avatar:
          type: string
          format: uri
          description: URL to user avatar image
        bio:
          type: string
          maxLength: 1000
          description: User biography
        location:
          type: string
          maxLength: 100
          description: User location
        website:
          type: string
          format: uri
          description: User website URL
        social:
          type: object
          properties:
            github:
              type: string
            linkedin:
              type: string
            twitter:
              type: string
        preferences:
          $ref: '#/components/schemas/UserPreferences'
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
        lastLoginAt:
          type: string
          format: date-time

    UserPreferences:
      type: object
      properties:
        theme:
          type: string
          enum: [light, dark, auto]
          default: auto
        language:
          type: string
          enum: [en, es, fr, de, zh, ja]
          default: en
        timezone:
          type: string
          description: IANA timezone identifier
        notifications:
          type: object
          properties:
            email:
              type: boolean
              default: true
            push:
              type: boolean
              default: true
            achievements:
              type: boolean
              default: true
            reminders:
              type: boolean
              default: true
        codeEditor:
          type: object
          properties:
            theme:
              type: string
              enum: [vs-light, vs-dark, high-contrast]
              default: vs-light
            fontSize:
              type: integer
              minimum: 10
              maximum: 24
              default: 14
            tabSize:
              type: integer
              minimum: 2
              maximum: 8
              default: 2
            wordWrap:
              type: boolean
              default: true

    # Learning Content
    Module:
      type: object
      required: [id, title, description, level, status]
      properties:
        id:
          type: string
          format: uuid
        title:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 2000
        level:
          type: string
          enum: [foundations, intermediate, advanced, expert]
        status:
          type: string
          enum: [draft, published, archived]
        order:
          type: integer
          minimum: 0
        estimatedDuration:
          type: integer
          description: Estimated duration in minutes
        prerequisites:
          type: array
          items:
            type: string
            format: uuid
          description: Array of prerequisite module IDs
        learningObjectives:
          type: array
          items:
            type: string
        tags:
          type: array
          items:
            type: string
        difficulty:
          type: integer
          minimum: 1
          maximum: 10
        author:
          $ref: '#/components/schemas/User'
        lessons:
          type: array
          items:
            $ref: '#/components/schemas/Lesson'
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time

    Lesson:
      type: object
      required: [id, title, type, content]
      properties:
        id:
          type: string
          format: uuid
        moduleId:
          type: string
          format: uuid
        title:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 1000
        type:
          type: string
          enum: [video, text, interactive, demo, exercise, quiz, project]
        order:
          type: integer
          minimum: 0
        estimatedDuration:
          type: integer
          description: Estimated duration in minutes
        content:
          $ref: '#/components/schemas/LessonContent'
        resources:
          type: array
          items:
            $ref: '#/components/schemas/Resource'
        prerequisites:
          type: array
          items:
            type: string
            format: uuid
        learningObjectives:
          type: array
          items:
            type: string
        status:
          type: string
          enum: [draft, published, archived]
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time

    LessonContent:
      type: object
      properties:
        text:
          type: string
          description: Markdown-formatted text content
        video:
          type: object
          properties:
            url:
              type: string
              format: uri
            duration:
              type: integer
            subtitles:
              type: array
              items:
                type: object
                properties:
                  language:
                    type: string
                  url:
                    type: string
                    format: uri
        interactive:
          type: object
          properties:
            type:
              type: string
              enum: [demo, simulation, visualization]
            config:
              type: object
              description: Interactive content configuration
        code:
          type: object
          properties:
            language:
              type: string
            template:
              type: string
            solution:
              type: string
            tests:
              type: array
              items:
                $ref: '#/components/schemas/TestCase'
        quiz:
          type: object
          properties:
            questions:
              type: array
              items:
                $ref: '#/components/schemas/QuizQuestion'

    # Code Execution
    Sandbox:
      type: object
      required: [id, language, status]
      properties:
        id:
          type: string
          format: uuid
        language:
          type: string
          enum: [javascript, typescript, python, java, go, rust, cpp]
        status:
          type: string
          enum: [creating, ready, running, error, destroyed]
        config:
          type: object
          properties:
            timeLimit:
              type: integer
              minimum: 1
              maximum: 300
              description: Execution time limit in seconds
            memoryLimit:
              type: integer
              minimum: 64
              maximum: 2048
              description: Memory limit in MB
            diskLimit:
              type: integer
              minimum: 10
              maximum: 1024
              description: Disk space limit in MB
        files:
          type: array
          items:
            type: object
            properties:
              path:
                type: string
              content:
                type: string
              readonly:
                type: boolean
                default: false
        environment:
          type: object
          additionalProperties:
            type: string
          description: Environment variables
        createdAt:
          type: string
          format: date-time
        expiresAt:
          type: string
          format: date-time

    ExecutionResult:
      type: object
      required: [success, executionTime]
      properties:
        success:
          type: boolean
        output:
          type: string
          description: Standard output
        error:
          type: string
          description: Error output
        executionTime:
          type: integer
          description: Execution time in milliseconds
        memoryUsed:
          type: integer
          description: Memory used in bytes
        exitCode:
          type: integer
          description: Process exit code

    # Testing & Validation
    TestCase:
      type: object
      required: [id, name, input, expected]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 1000
        type:
          type: string
          enum: [unit, integration, functional, edge_case]
        input:
          type: object
          description: Test input data
        expected:
          type: object
          description: Expected output
        timeout:
          type: integer
          minimum: 1000
          maximum: 30000
          description: Test timeout in milliseconds
        points:
          type: integer
          minimum: 1
          maximum: 100
          description: Points awarded for passing this test
        hidden:
          type: boolean
          default: false
          description: Whether this test is hidden from students

    TestResult:
      type: object
      required: [testCase, passed, executionTime]
      properties:
        testCase:
          $ref: '#/components/schemas/TestCase'
        passed:
          type: boolean
        output:
          type: string
        error:
          type: string
        executionTime:
          type: integer
        memoryUsed:
          type: integer
        score:
          type: integer
          minimum: 0
          maximum: 100

    # Progress Tracking
    UserProgress:
      type: object
      required: [userId, moduleId, status]
      properties:
        userId:
          type: string
          format: uuid
        moduleId:
          type: string
          format: uuid
        lessonId:
          type: string
          format: uuid
        status:
          type: string
          enum: [not_started, in_progress, completed, skipped]
        progressPercentage:
          type: number
          minimum: 0
          maximum: 100
        timeSpent:
          type: integer
          description: Time spent in minutes
        attempts:
          type: integer
          minimum: 0
        bestScore:
          type: number
          minimum: 0
          maximum: 100
        startedAt:
          type: string
          format: date-time
        completedAt:
          type: string
          format: date-time
        lastActivityAt:
          type: string
          format: date-time

    # Gamification
    Achievement:
      type: object
      required: [id, name, description, category, rarity]
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          maxLength: 255
        description:
          type: string
          maxLength: 1000
        category:
          type: string
          enum: [learning, coding, collaboration, achievement, special]
        rarity:
          type: string
          enum: [common, rare, epic, legendary]
        icon:
          type: string
          description: Icon identifier or URL
        badgeColor:
          type: string
          pattern: '^#[0-9A-Fa-f]{6}$'
          description: Hex color code for badge
        xpReward:
          type: integer
          minimum: 0
          description: XP points awarded
        conditions:
          type: array
          items:
            type: object
            properties:
              type:
                type: string
                enum: [metric, event, streak, milestone]
              metric:
                type: string
              operator:
                type: string
                enum: [gte, lte, eq, gt, lt]
              value:
                type: number
              event:
                type: string
              timeframe:
                type: string
        dependencies:
          type: array
          items:
            type: string
            format: uuid
          description: Required achievement IDs
        unlockContent:
          type: array
          items:
            type: string
          description: Content unlocked by this achievement

    UserAchievement:
      type: object
      required: [userId, achievementId, earnedAt]
      properties:
        userId:
          type: string
          format: uuid
        achievementId:
          type: string
          format: uuid
        achievement:
          $ref: '#/components/schemas/Achievement'
        earnedAt:
          type: string
          format: date-time
        progress:
          type: object
          description: Progress data when achievement was earned

    LeaderboardEntry:
      type: object
      required: [user, rank, score]
      properties:
        user:
          $ref: '#/components/schemas/User'
        rank:
          type: integer
          minimum: 1
        score:
          type: integer
          minimum: 0
        points:
          type: object
          properties:
            total:
              type: integer
            weekly:
              type: integer
            monthly:
              type: integer
        change:
          type: integer
          description: Rank change from previous period

    # Error Handling
    Error:
      type: object
      required: [code, message]
      properties:
        code:
          type: string
          description: Error code identifier
        message:
          type: string
          description: Human-readable error message
        details:
          type: object
          description: Additional error details
        timestamp:
          type: string
          format: date-time
        requestId:
          type: string
          description: Unique request identifier for debugging

    ValidationError:
      allOf:
        - $ref: '#/components/schemas/Error'
        - type: object
          properties:
            field:
              type: string
              description: Field that failed validation
            value:
              type: string
              description: Invalid value provided
            constraints:
              type: array
              items:
                type: string
              description: Validation constraints that were violated

  parameters:
    # Pagination
    PageParam:
      name: page
      in: query
      description: Page number (1-based)
      schema:
        type: integer
        minimum: 1
        default: 1

    LimitParam:
      name: limit
      in: query
      description: Number of items per page
      schema:
        type: integer
        minimum: 1
        maximum: 100
        default: 20

    SortParam:
      name: sort
      in: query
      description: Sort field and direction (e.g., "createdAt:desc")
      schema:
        type: string
        pattern: '^[a-zA-Z][a-zA-Z0-9]*:(asc|desc)$'

    # Filtering
    SearchParam:
      name: search
      in: query
      description: Search query string
      schema:
        type: string
        maxLength: 255

    StatusParam:
      name: status
      in: query
      description: Filter by status
      schema:
        type: string

    # Resource IDs
    UserIdParam:
      name: userId
      in: path
      required: true
      description: User ID
      schema:
        type: string
        format: uuid

    ModuleIdParam:
      name: moduleId
      in: path
      required: true
      description: Module ID
      schema:
        type: string
        format: uuid

    LessonIdParam:
      name: lessonId
      in: path
      required: true
      description: Lesson ID
      schema:
        type: string
        format: uuid

    SandboxIdParam:
      name: sandboxId
      in: path
      required: true
      description: Sandbox ID
      schema:
        type: string
        format: uuid

  responses:
    # Success Responses
    Created:
      description: Resource created successfully
      headers:
        Location:
          description: URL of the created resource
          schema:
            type: string
            format: uri

    NoContent:
      description: Operation completed successfully with no content

    # Error Responses
    BadRequest:
      description: Bad request - Invalid input data
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ValidationError'

    Unauthorized:
      description: Authentication required
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    Forbidden:
      description: Access denied
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    NotFound:
      description: Resource not found
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    Conflict:
      description: Resource conflict
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    TooManyRequests:
      description: Rate limit exceeded
      headers:
        Retry-After:
          description: Seconds to wait before retrying
          schema:
            type: integer
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

    InternalServerError:
      description: Internal server error
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Error'

paths:
  # Authentication
  /auth/login:
    post:
      tags: [Authentication]
      summary: User login
      description: Authenticate user with email and password
      operationId: login
      security: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, password]
              properties:
                email:
                  type: string
                  format: email
                password:
                  type: string
                  minLength: 8
                rememberMe:
                  type: boolean
                  default: false
      responses:
        '200':
          description: Login successful
          content:
            application/json:
              schema:
                type: object
                properties:
                  accessToken:
                    type: string
                    description: JWT access token
                  refreshToken:
                    type: string
                    description: Refresh token
                  expiresIn:
                    type: integer
                    description: Token expiration time in seconds
                  user:
                    $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'

  /auth/logout:
    post:
      tags: [Authentication]
      summary: User logout
      description: Invalidate user session and tokens
      operationId: logout
      responses:
        '204':
          $ref: '#/components/responses/NoContent'
        '401':
          $ref: '#/components/responses/Unauthorized'

  /auth/refresh:
    post:
      tags: [Authentication]
      summary: Refresh access token
      description: Get new access token using refresh token
      operationId: refreshToken
      security: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [refreshToken]
              properties:
                refreshToken:
                  type: string
      responses:
        '200':
          description: Token refreshed successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  accessToken:
                    type: string
                  expiresIn:
                    type: integer
        '401':
          $ref: '#/components/responses/Unauthorized'

  # User Management
  /users:
    get:
      tags: [Users]
      summary: List users
      description: Get paginated list of users
      operationId: listUsers
      parameters:
        - $ref: '#/components/parameters/PageParam'
        - $ref: '#/components/parameters/LimitParam'
        - $ref: '#/components/parameters/SortParam'
        - $ref: '#/components/parameters/SearchParam'
        - name: role
          in: query
          description: Filter by user role
          schema:
            type: string
            enum: [student, instructor, teaching_assistant, admin]
      responses:
        '200':
          description: Users retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    type: object
                    properties:
                      page:
                        type: integer
                      limit:
                        type: integer
                      total:
                        type: integer
                      pages:
                        type: integer
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'

    post:
      tags: [Users]
      summary: Create user
      description: Create a new user account
      operationId: createUser
      security: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, username, password, fullName]
              properties:
                email:
                  type: string
                  format: email
                username:
                  type: string
                  minLength: 3
                  maxLength: 30
                  pattern: '^[a-zA-Z0-9_-]+$'
                password:
                  type: string
                  minLength: 8
                fullName:
                  type: string
                  maxLength: 255
                role:
                  type: string
                  enum: [student, instructor]
                  default: student
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'

  /users/{userId}:
    get:
      tags: [Users]
      summary: Get user by ID
      description: Retrieve user information by ID
      operationId: getUserById
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
      responses:
        '200':
          description: User retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '404':
          $ref: '#/components/responses/NotFound'

    put:
      tags: [Users]
      summary: Update user
      description: Update user information
      operationId: updateUser
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                fullName:
                  type: string
                  maxLength: 255
                bio:
                  type: string
                  maxLength: 1000
                location:
                  type: string
                  maxLength: 100
                website:
                  type: string
                  format: uri
                social:
                  type: object
                  properties:
                    github:
                      type: string
                    linkedin:
                      type: string
                    twitter:
                      type: string
                preferences:
                  $ref: '#/components/schemas/UserPreferences'
      responses:
        '200':
          description: User updated successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'
        '404':
          $ref: '#/components/responses/NotFound'

    delete:
      tags: [Users]
      summary: Delete user
      description: Delete user account
      operationId: deleteUser
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
      responses:
        '204':
          $ref: '#/components/responses/NoContent'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '403':
          $ref: '#/components/responses/Forbidden'
        '404':
          $ref: '#/components/responses/NotFound'

  # Learning Content
  /modules:
    get:
      tags: [Learning Content]
      summary: List modules
      description: Get paginated list of learning modules
      operationId: listModules
      parameters:
        - $ref: '#/components/parameters/PageParam'
        - $ref: '#/components/parameters/LimitParam'
        - $ref: '#/components/parameters/SortParam'
        - $ref: '#/components/parameters/SearchParam'
        - name: level
          in: query
          description: Filter by difficulty level
          schema:
            type: string
            enum: [foundations, intermediate, advanced, expert]
        - name: status
          in: query
          description: Filter by status
          schema:
            type: string
            enum: [draft, published, archived]
      responses:
        '200':
          description: Modules retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Module'
                  pagination:
                    type: object
                    properties:
                      page:
                        type: integer
                      limit:
                        type: integer
                      total:
                        type: integer
                      pages:
                        type: integer

  /modules/{moduleId}:
    get:
      tags: [Learning Content]
      summary: Get module by ID
      description: Retrieve module information including lessons
      operationId: getModuleById
      parameters:
        - $ref: '#/components/parameters/ModuleIdParam'
      responses:
        '200':
          description: Module retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Module'

  /modules/{moduleId}/lessons:
    get:
      tags: [Learning Content]
      summary: List module lessons
      description: Get all lessons for a specific module
      operationId: getModuleLessons
      parameters:
        - $ref: '#/components/parameters/ModuleIdParam'
      responses:
        '200':
          description: Lessons retrieved successfully
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Lesson'

  /lessons/{lessonId}:
    get:
      tags: [Learning Content]
      summary: Get lesson by ID
      description: Retrieve lesson content and metadata
      operationId: getLessonById
      parameters:
        - $ref: '#/components/parameters/LessonIdParam'
      responses:
        '200':
          description: Lesson retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Lesson'

  # Code Sandbox
  /sandbox:
    post:
      tags: [Code Sandbox]
      summary: Create sandbox
      description: Create a new code execution sandbox
      operationId: createSandbox
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [language]
              properties:
                language:
                  type: string
                  enum: [javascript, typescript, python, java, go, rust, cpp]
                config:
                  type: object
                  properties:
                    timeLimit:
                      type: integer
                      minimum: 1
                      maximum: 300
                      default: 30
                    memoryLimit:
                      type: integer
                      minimum: 64
                      maximum: 2048
                      default: 512
                    diskLimit:
                      type: integer
                      minimum: 10
                      maximum: 1024
                      default: 100
                files:
                  type: array
                  items:
                    type: object
                    required: [path, content]
                    properties:
                      path:
                        type: string
                      content:
                        type: string
                      readonly:
                        type: boolean
                        default: false
      responses:
        '201':
          description: Sandbox created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Sandbox'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'

  /sandbox/{sandboxId}:
    get:
      tags: [Code Sandbox]
      summary: Get sandbox
      description: Retrieve sandbox information and status
      operationId: getSandbox
      parameters:
        - $ref: '#/components/parameters/SandboxIdParam'
      responses:
        '200':
          description: Sandbox retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Sandbox'

    delete:
      tags: [Code Sandbox]
      summary: Delete sandbox
      description: Destroy sandbox and clean up resources
      operationId: deleteSandbox
      parameters:
        - $ref: '#/components/parameters/SandboxIdParam'
      responses:
        '204':
          $ref: '#/components/responses/NoContent'

  /sandbox/{sandboxId}/execute:
    post:
      tags: [Code Sandbox]
      summary: Execute code
      description: Execute code in the sandbox environment
      operationId: executeCode
      parameters:
        - $ref: '#/components/parameters/SandboxIdParam'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [code]
              properties:
                code:
                  type: string
                  description: Code to execute
                input:
                  type: string
                  description: Standard input for the program
                arguments:
                  type: array
                  items:
                    type: string
                  description: Command line arguments
      responses:
        '200':
          description: Code executed successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExecutionResult'
        '400':
          $ref: '#/components/responses/BadRequest'

  /sandbox/{sandboxId}/test:
    post:
      tags: [Code Sandbox]
      summary: Run tests
      description: Execute test cases against code in sandbox
      operationId: runTests
      parameters:
        - $ref: '#/components/parameters/SandboxIdParam'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [code, tests]
              properties:
                code:
                  type: string
                  description: Code to test
                tests:
                  type: array
                  items:
                    $ref: '#/components/schemas/TestCase'
      responses:
        '200':
          description: Tests executed successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  results:
                    type: array
                    items:
                      $ref: '#/components/schemas/TestResult'
                  summary:
                    type: object
                    properties:
                      total:
                        type: integer
                      passed:
                        type: integer
                      failed:
                        type: integer
                      score:
                        type: number
                        minimum: 0
                        maximum: 100

  # Progress Tracking
  /users/{userId}/progress:
    get:
      tags: [Progress]
      summary: Get user progress
      description: Retrieve user learning progress across all modules
      operationId: getUserProgress
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
        - name: moduleId
          in: query
          description: Filter by specific module
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: Progress retrieved successfully
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/UserProgress'

    post:
      tags: [Progress]
      summary: Update progress
      description: Update user progress for a lesson or module
      operationId: updateUserProgress
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [moduleId, status]
              properties:
                moduleId:
                  type: string
                  format: uuid
                lessonId:
                  type: string
                  format: uuid
                status:
                  type: string
                  enum: [not_started, in_progress, completed, skipped]
                progressPercentage:
                  type: number
                  minimum: 0
                  maximum: 100
                timeSpent:
                  type: integer
                score:
                  type: number
                  minimum: 0
                  maximum: 100
      responses:
        '200':
          description: Progress updated successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserProgress'

  # Gamification
  /achievements:
    get:
      tags: [Gamification]
      summary: List achievements
      description: Get all available achievements
      operationId: listAchievements
      parameters:
        - $ref: '#/components/parameters/PageParam'
        - $ref: '#/components/parameters/LimitParam'
        - name: category
          in: query
          description: Filter by achievement category
          schema:
            type: string
            enum: [learning, coding, collaboration, achievement, special]
        - name: rarity
          in: query
          description: Filter by rarity level
          schema:
            type: string
            enum: [common, rare, epic, legendary]
      responses:
        '200':
          description: Achievements retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Achievement'
                  pagination:
                    type: object

  /users/{userId}/achievements:
    get:
      tags: [Gamification]
      summary: Get user achievements
      description: Retrieve all achievements earned by a user
      operationId: getUserAchievements
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
      responses:
        '200':
          description: User achievements retrieved successfully
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/UserAchievement'

  /users/{userId}/points:
    get:
      tags: [Gamification]
      summary: Get user points
      description: Retrieve user point summary and history
      operationId: getUserPoints
      parameters:
        - $ref: '#/components/parameters/UserIdParam'
        - name: timeframe
          in: query
          description: Time frame for point history
          schema:
            type: string
            enum: [day, week, month, year, all]
            default: month
      responses:
        '200':
          description: User points retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  total:
                    type: integer
                    description: Total points earned
                  breakdown:
                    type: object
                    properties:
                      learning:
                        type: integer
                      coding:
                        type: integer
                      collaboration:
                        type: integer
                      achievements:
                        type: integer
                  history:
                    type: array
                    items:
                      type: object
                      properties:
                        date:
                          type: string
                          format: date
                        points:
                          type: integer
                        reason:
                          type: string

  /leaderboards:
    get:
      tags: [Gamification]
      summary: Get leaderboards
      description: Retrieve leaderboard data
      operationId: getLeaderboards
      parameters:
        - name: type
          in: query
          description: Leaderboard type
          schema:
            type: string
            enum: [global, weekly, monthly, course]
            default: global
        - name: limit
          in: query
          description: Number of entries to return
          schema:
            type: integer
            minimum: 10
            maximum: 100
            default: 50
      responses:
        '200':
          description: Leaderboard retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  entries:
                    type: array
                    items:
                      $ref: '#/components/schemas/LeaderboardEntry'
                  userRank:
                    type: integer
                    description: Current user's rank (if authenticated)

  # Analytics
  /analytics/overview:
    get:
      tags: [Analytics]
      summary: Get platform overview
      description: Retrieve high-level platform statistics
      operationId: getPlatformOverview
      responses:
        '200':
          description: Overview data retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  users:
                    type: object
                    properties:
                      total:
                        type: integer
                      active:
                        type: integer
                      newThisWeek:
                        type: integer
                  content:
                    type: object
                    properties:
                      modules:
                        type: integer
                      lessons:
                        type: integer
                      exercises:
                        type: integer
                  activity:
                    type: object
                    properties:
                      codeExecutions:
                        type: integer
                      submissionsToday:
                        type: integer
                      averageSessionTime:
                        type: number
```

## 🔐 Authentication & Authorization

### JWT Token Structure
```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user-uuid",
    "email": "user@example.com",
    "role": "student",
    "permissions": ["read:own", "write:own"],
    "iat": 1640995200,
    "exp": 1641081600,
    "iss": "opencode-platform"
  }
}
```

### Permission System
```typescript
enum Permission {
  // User permissions
  READ_OWN_PROFILE = 'read:own:profile',
  WRITE_OWN_PROFILE = 'write:own:profile',
  
  // Content permissions
  READ_CONTENT = 'read:content',
  WRITE_CONTENT = 'write:content',
  PUBLISH_CONTENT = 'publish:content',
  
  // Progress permissions
  READ_OWN_PROGRESS = 'read:own:progress',
  WRITE_OWN_PROGRESS = 'write:own:progress',
  READ_ALL_PROGRESS = 'read:all:progress',
  
  // Sandbox permissions
  CREATE_SANDBOX = 'create:sandbox',
  EXECUTE_CODE = 'execute:code',
  
  // Admin permissions
  MANAGE_USERS = 'manage:users',
  MANAGE_PLATFORM = 'manage:platform',
  VIEW_ANALYTICS = 'view:analytics',
}

const rolePermissions = {
  student: [
    Permission.READ_OWN_PROFILE,
    Permission.WRITE_OWN_PROFILE,
    Permission.READ_CONTENT,
    Permission.READ_OWN_PROGRESS,
    Permission.WRITE_OWN_PROGRESS,
    Permission.CREATE_SANDBOX,
    Permission.EXECUTE_CODE,
  ],
  instructor: [
    // All student permissions plus:
    Permission.WRITE_CONTENT,
    Permission.READ_ALL_PROGRESS,
    Permission.VIEW_ANALYTICS,
  ],
  admin: [
    // All permissions
    ...Object.values(Permission),
  ],
};
```

## 📊 Rate Limiting

### Rate Limit Configuration
```yaml
rate_limits:
  default:
    window: 3600  # 1 hour
    max: 1000     # requests per window
    
  authentication:
    window: 900   # 15 minutes
    max: 5        # login attempts per window
    
  sandbox_execution:
    window: 60    # 1 minute
    max: 10       # executions per minute
    
  content_creation:
    window: 3600  # 1 hour
    max: 50       # content operations per hour
```

### Rate Limit Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
X-RateLimit-Window: 3600
```

## 🔍 Error Handling

### Standard Error Response Format
```json
{
  "code": "VALIDATION_ERROR",
  "message": "Invalid input data provided",
  "details": {
    "field": "email",
    "value": "invalid-email",
    "constraints": ["must be a valid email address"]
  },
  "timestamp": "2024-01-01T12:00:00Z",
  "requestId": "req_1234567890"
}
```

### Error Codes
```typescript
enum ErrorCode {
  // Validation errors
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',
  INVALID_FORMAT = 'INVALID_FORMAT',
  
  // Authentication errors
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  
  // Authorization errors
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  ACCESS_DENIED = 'ACCESS_DENIED',
  
  // Resource errors
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  RESOURCE_CONFLICT = 'RESOURCE_CONFLICT',
  RESOURCE_EXPIRED = 'RESOURCE_EXPIRED',
  
  // Sandbox errors
  SANDBOX_CREATION_FAILED = 'SANDBOX_CREATION_FAILED',
  EXECUTION_TIMEOUT = 'EXECUTION_TIMEOUT',
  EXECUTION_ERROR = 'EXECUTION_ERROR',
  MEMORY_LIMIT_EXCEEDED = 'MEMORY_LIMIT_EXCEEDED',
  
  // Rate limiting
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  
  // System errors
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  DATABASE_ERROR = 'DATABASE_ERROR',
}
```

## 📈 Monitoring & Metrics

### API Metrics
```typescript
interface APIMetrics {
  requests: {
    total: number;
    successful: number;
    failed: number;
    rate: number; // requests per second
  };
  
  response_times: {
    p50: number;
    p95: number;
    p99: number;
    average: number;
  };
  
  errors: {
    rate: number;
    by_code: Record<string, number>;
  };
  
  users: {
    active: number;
    concurrent: number;
  };
  
  sandbox: {
    active_sandboxes: number;
    executions_per_minute: number;
    average_execution_time: number;
  };
}
```

This comprehensive API specification provides a complete foundation for implementing the OpenCode platform with proper authentication, validation, error handling, and monitoring capabilities.