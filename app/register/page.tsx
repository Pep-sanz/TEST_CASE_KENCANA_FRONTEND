"use client";

import React, { useState } from "react";
import Styles from "@/styles/register.module.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState<typeof value | null>(null);

  const handleChange = (
    slug: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const val = e.target.value;

    setValue({
      ...value,
      [slug]: val,
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmittedData(value);
  };

  return (
    <div className={Styles.page}>
      <div className={Styles.wrapper}>
        <div className={Styles.registerCard}>
          <h1 className={Styles.title}>Register</h1>

          <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.inputWrapper}>
              <label htmlFor="userName">Username</label>

              <input
                id="userName"
                type="text"
                placeholder="Masukan nama anda"
                value={value.username}
                onChange={(e) => handleChange("username", e)}
              />
            </div>

            <div className={Styles.inputWrapper}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Masukan email anda"
                value={value.email}
                onChange={(e) => handleChange("email", e)}
              />
            </div>

            <div className={Styles.inputWrapper}>
              <label htmlFor="password">Password</label>

              <div className={Styles.passwordWrapper}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan password"
                  value={value.password}
                  onChange={(e) => handleChange("password", e)}
                />

                <button
                  type="button"
                  className={Styles.showButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="button">
              Daftar
            </button>
          </form>
        </div>

        {submittedData && (
          <div className={Styles.previewCard}>
            <h2 className={Styles.previewTitle}>User Preview</h2>

            <div className={Styles.previewItem}>
              <span>Username</span>
              <p>{submittedData.username}</p>
            </div>

            <div className={Styles.previewItem}>
              <span>Email</span>
              <p>{submittedData.email}</p>
            </div>

            <div className={Styles.previewItem}>
              <span>Password</span>
              <p>{submittedData.password}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
