function authList(usernames) {
    // Loop over every username
    for (let i = 0; i < usernames.length; i++) {
      let username = usernames[i];
      let hasLowerCase = false;
      let hasNumber = false;
      let hasSpecial = false;
  
      // Check the username length
      if (username.length < 6 || username.length > 10) {
        return false;
      }
  
      // Loop over every character in the username
      let characters = username.split("");
      for (let j = 0; j < characters.length; j++) {
        let character = characters[j];
  
        // If the username has a lowercase character
        if (isLowerCase(character)) {
          hasLowerCase = true;
        }
  
        if (character >= "0" && character <= "9") {
          hasNumber = true;
        }
  
        if (
          !isLowerCase(character) &&
          !(character >= "0" && character <= "9") &&
          !(character >= "A" && character <= "Z")
        ) {
          hasSpecial = true;
        }
      }
  
      if (!hasLowerCase || !hasNumber || hasSpecial) {
        return false;
      }
    }
  
    return true;
  }
  
  function isLowerCase(character) {
    return character >= "a" && character <= "z";
  }