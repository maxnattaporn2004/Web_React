import "./AuthPage.css";
import { useState } from "react";

// Simple email pattern check (no external library needed).
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Checks every field for the current mode and returns an object of
// error messages. An empty object means the form is valid.
function validateFields(mode, values) {
  const errors = {};

  if (mode === "register" && !values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (mode === "register") {
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!values.acceptedTerms) {
      errors.acceptedTerms = "You must accept the Terms and Conditions.";
    }
  }

  return errors;
}

const EMPTY_VALUES = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  rememberMe: false,
  acceptedTerms: false,
};

export default function AuthPage({ initialMode = "login" }) {
  // "login" and "register" — controlled by React state only.
  const [mode, setMode] = useState(initialMode);
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isRegister = mode === "register";

  // Generic change handler for every input and checkbox.
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const nextValue = type === "checkbox" ? checked : value;

    setValues((prev) => ({ ...prev, [name]: nextValue }));

    // Clear this field's error while the user is fixing it.
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  // Switch modes and reset the form, so no fields "leak" between modes.
  function switchMode(nextMode) {
    setMode(nextMode);
    setValues(EMPTY_VALUES);
    setErrors({});
    setStatus("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateFields(mode, values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return; // Validation failed — do not submit.
    }

    // Honest feedback: no backend is connected, so nothing really happened.
    setStatus(
      isRegister
        ? "Demo only — the form is valid, but no account was created because no backend is connected."
        : "Demo only — the form is valid, but you were not logged in because no backend is connected."
    );
  }

  // Placeholder links (forgot password / terms) — no real page exists yet.
  function handlePlaceholderLink(event, message) {
    event.preventDefault();
    setStatus(message);
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        {/* Same text placeholder the navbar uses (no logo asset exists). */}
        <a className="auth-brand" href="#/" aria-label="Back to home page">
          Logo
        </a>

        {/* key={mode} replays the fade-in when switching login/register */}
        <div className="auth-form-area" key={mode}>
          <h1 className="auth-title">
            {isRegister ? "Create your account" : "Welcome back"}
          </h1>
          <p className="auth-subtitle">
            {isRegister
              ? "Fill in the details below to register."
              : "Sign in to continue."}
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {/* Register only: full name */}
            {isRegister && (
              <div className="auth-field">
                <label htmlFor="auth-full-name">Full name</label>
                <input
                  id="auth-full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={values.fullName}
                  onChange={handleChange}
                  aria-invalid={errors.fullName ? "true" : undefined}
                  aria-describedby={
                    errors.fullName ? "auth-full-name-error" : undefined
                  }
                />
                {errors.fullName && (
                  <p className="auth-error" id="auth-full-name-error">
                    {errors.fullName}
                  </p>
                )}
              </div>
            )}

            {/* Email */}
            <div className="auth-field">
              <label htmlFor="auth-email">Email address</label>
              <input
                id="auth-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={
                  errors.email ? "auth-email-error" : undefined
                }
              />
              {errors.email && (
                <p className="auth-error" id="auth-email-error">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="auth-field">
              <label htmlFor="auth-password">Password</label>
              <div className="auth-input-wrap">
                <input
                  id="auth-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  placeholder="••••••••"
                  value={values.password}
                  onChange={handleChange}
                  aria-invalid={errors.password ? "true" : undefined}
                  aria-describedby={
                    errors.password ? "auth-password-error" : undefined
                  }
                />
                <button
                  type="button"
                  className="auth-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="auth-error" id="auth-password-error">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Register only: confirm password */}
            {isRegister && (
              <div className="auth-field">
                <label htmlFor="auth-confirm-password">Confirm password</label>
                <div className="auth-input-wrap">
                  <input
                    id="auth-confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    aria-invalid={errors.confirmPassword ? "true" : undefined}
                    aria-describedby={
                      errors.confirmPassword
                        ? "auth-confirm-password-error"
                        : undefined
                    }
                  />
                  <button
                    type="button"
                    className="auth-toggle"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    aria-pressed={showConfirmPassword}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="auth-error" id="auth-confirm-password-error">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Login only: remember me + forgot password */}
            {!isRegister && (
              <div className="auth-row">
                <label className="auth-check">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={values.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Remember me</span>
                </label>
                <a
                  className="auth-link"
                  href="#/forgot-password"
                  onClick={(event) =>
                    handlePlaceholderLink(
                      event,
                      "Password reset is not available yet — no backend is connected."
                    )
                  }
                >
                  Forgot password?
                </a>
              </div>
            )}

            {/* Register only: terms and conditions */}
            {isRegister && (
              <div className="auth-field">
                <label className="auth-check">
                  <input
                    name="acceptedTerms"
                    type="checkbox"
                    checked={values.acceptedTerms}
                    onChange={handleChange}
                    aria-invalid={errors.acceptedTerms ? "true" : undefined}
                    aria-describedby={
                      errors.acceptedTerms ? "auth-terms-error" : undefined
                    }
                  />
                  <span>
                    I accept the{" "}
                    <a
                      className="auth-link"
                      href="#/terms"
                      onClick={(event) =>
                        handlePlaceholderLink(
                          event,
                          "Terms and Conditions page is not available yet."
                        )
                      }
                    >
                      Terms and Conditions
                    </a>
                  </span>
                </label>
                {errors.acceptedTerms && (
                  <p className="auth-error" id="auth-terms-error">
                    {errors.acceptedTerms}
                  </p>
                )}
              </div>
            )}

            {/* Submit + honest feedback message */}
            <button type="submit" className="auth-submit">
              {isRegister ? "Register" : "Login"}
            </button>

            <p className="auth-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>

          {/* Switch between the two modes */}
          <p className="auth-switch">
            {isRegister ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              className="auth-link"
              onClick={() => switchMode(isRegister ? "login" : "register")}
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>
        </div>

        <a className="auth-back" href="#/">
          ← Back to home
        </a>
      </div>
    </main>
  );
}
