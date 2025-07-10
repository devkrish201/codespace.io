# Define root
$root = "src"

# Folder structure
$folders = @(
    "$root/app",
    "$root/assets/icons",
    "$root/assets/illustrations",
    "$root/assets/logo",
    "$root/assets/styles",
    "$root/common/constants",
    "$root/common/hooks",
    "$root/common/types",
    "$root/common/utils",
    "$root/components/layout",
    "$root/components/ui",
    "$root/components/shared",
    "$root/features/auth/components",
    "$root/features/auth/pages",
    "$root/features/auth/services",
    "$root/features/auth/hooks",
    "$root/features/dsa-tracker/components",
    "$root/features/dsa-tracker/pages",
    "$root/features/dsa-tracker/services",
    "$root/features/dsa-tracker/hooks",
    "$root/features/project-tracker/components",
    "$root/features/project-tracker/pages",
    "$root/features/project-tracker/services",
    "$root/features/daily-planner/components",
    "$root/features/daily-planner/pages",
    "$root/features/daily-planner/services",
    "$root/features/dashboard/components",
    "$root/features/dashboard/pages",
    "$root/features/user-management/components",
    "$root/features/user-management/pages",
    "$root/features/user-management/services",
    "$root/lib/api",
    "$root/lib/context",
    "$root/services"
)

# Create folders
foreach ($folder in $folders) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "📁 Created: $folder"
    }
}

# File map
$files = @{
    "$root/app/App.tsx" = "// App root component"
    "$root/app/ProtectedRoute.tsx" = "// Protected route logic"
    "$root/app/routes.tsx" = "// App route config"
    "$root/app/store.ts" = "// Redux/Context store setup"

    "$root/assets/styles/global.scss" = "/* Global styles */"
    "$root/assets/styles/variables.scss" = "/* SCSS variables */"

    "$root/common/constants/apiRoutes.ts" = "// API route definitions"
    "$root/common/constants/roles.ts" = "// User role constants"
    "$root/common/constants/theme.ts" = "// Theme constants"

    "$root/common/hooks/useDebounce.ts" = "// Debounce logic"
    "$root/common/hooks/useFetch.ts" = "// API fetching"
    "$root/common/hooks/useAnalytics.ts" = "// Track user analytics"

    "$root/common/types/global.d.ts" = "// Global TypeScript definitions"

    "$root/common/utils/downloadFile.ts" = "// Download helper"
    "$root/common/utils/formatDate.ts" = "// Date formatter"
    "$root/common/utils/authHelpers.ts" = "// Auth-related utilities"

    "$root/components/layout/AuthLayout.tsx" = "// Auth page layout"
    "$root/components/layout/MainLayout.tsx" = "// Main app layout"

    "$root/components/ui/Button.tsx" = "// UI button component"
    "$root/components/ui/Input.tsx" = "// UI input component"
    "$root/components/ui/Modal.tsx" = "// UI modal"
    "$root/components/ui/ProgressRing.tsx" = "// Progress ring component"

    "$root/components/shared/DataTable.tsx" = "// Shared data table"
    "$root/components/shared/StatsCard.tsx" = "// Stats display card"
    "$root/components/shared/HeatMap.tsx" = "// Contribution heatmap"

    "$root/features/auth/components/AuthForm.tsx" = "// Auth form"
    "$root/features/auth/components/OAuthButtons.tsx" = "// Google/GitHub auth"
    "$root/features/auth/pages/Login.tsx" = "// Login page"
    "$root/features/auth/pages/Register.tsx" = "// Register page"
    "$root/features/auth/pages/ForgotPassword.tsx" = "// Forgot password page"
    "$root/features/auth/services/authService.ts" = "// Auth API calls"
    "$root/features/auth/hooks/useAuth.ts" = "// Auth state hook"

    "$root/features/dsa-tracker/components/ProblemCard.tsx" = "// DSA problem card"
    "$root/features/dsa-tracker/components/SolutionEditor.tsx" = "// Code editor"
    "$root/features/dsa-tracker/components/RoadmapView.tsx" = "// Topic roadmap"
    "$root/features/dsa-tracker/pages/DSAProblems.tsx" = "// DSA problems list"
    "$root/features/dsa-tracker/pages/ProblemDetail.tsx" = "// Problem details"
    "$root/features/dsa-tracker/services/dsaService.ts" = "// DSA backend API"
    "$root/features/dsa-tracker/hooks/useDSAProgress.ts" = "// Progress tracker"

    "$root/features/project-tracker/components/ProjectCard.tsx" = "// Project summary"
    "$root/features/project-tracker/components/MilestoneList.tsx" = "// Project milestones"
    "$root/features/project-tracker/components/TechStackBadge.tsx" = "// Tech stack badge"
    "$root/features/project-tracker/pages/ProjectList.tsx" = "// List of projects"
    "$root/features/project-tracker/pages/ProjectDetail.tsx" = "// Project details"
    "$root/features/project-tracker/services/projectService.ts" = "// Project API"

    "$root/features/daily-planner/components/GoalCard.tsx" = "// Goal tracker"
    "$root/features/daily-planner/components/StreakCounter.tsx" = "// Streaks UI"
    "$root/features/daily-planner/pages/DailyPlanner.tsx" = "// Daily tasks"
    "$root/features/daily-planner/services/plannerService.ts" = "// Planner API"

    "$root/features/dashboard/components/ActivityFeed.tsx" = "// User activities"
    "$root/features/dashboard/components/ProgressChart.tsx" = "// Learning chart"
    "$root/features/dashboard/components/TimeTracker.tsx" = "// Time tracking"
    "$root/features/dashboard/pages/Dashboard.tsx" = "// Combined dashboard"

    "$root/features/user-management/components/ProfileForm.tsx" = "// Edit profile"
    "$root/features/user-management/pages/UserList.tsx" = "// User list"
    "$root/features/user-management/pages/Profile.tsx" = "// User profile"
    "$root/features/user-management/services/userService.ts" = "// User service"

    "$root/lib/api/apiClient.ts" = "// Axios API client setup"
    "$root/lib/context/AnalyticsProvider.tsx" = "// Analytics context"
    "$root/lib/context/AuthProvider.tsx" = "// Auth context"
    "$root/lib/context/SettingsProvider.tsx" = "// App settings context"

    "$root/services/analyticsService.ts" = "// Analytics functions"
    "$root/services/notificationService.ts" = "// Notification logic"
}

# Create starter files
foreach ($file in $files.Keys) {
    $dir = Split-Path $file
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    if (-not (Test-Path $file)) {
        New-Item -ItemType File -Path $file -Force | Out-Null
        Set-Content -Path $file -Value $files[$file]
        Write-Host "📄 Created: $file"
    } else {
        Write-Host "⚠️  Exists: $file"
    }
}

Write-Host "`n🚀 Project structure and files created for CodeSpace.io"
