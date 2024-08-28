export const requirements = [
  {
    id: 0,
    name: "At least 6 characters long",
    color: "red",
    test: function (password) {
      if (password.length >= 6) {
        this.color = "green";
      } else {
        this.color = "red";
      }
    },
  },

  {
    id: 1,
    name: "At least 1 number",
    color: "red",
    test: function (password) {
      if (/\d/.test(password)) {
        this.color = "green";
      } else {
        this.color = "red";
      }
    },
  },

  {
    id: 2,
    name: "At least 1 uppercase letter",
    color: "red",
    test: function (password) {
      if (/[A-Z]/.test(password)) {
        this.color = "green";
      } else {
        this.color = "red";
      }
    },
  },
];

export const requirementsMet = [];
