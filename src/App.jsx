import { use, useEffect } from "react";
import { supabase } from "./config/supabaseClient";
import { useState } from "react";


function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function testDB() {
      // Try selecting all users from your 'users' table
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        console.error("❌ Database connection error:", error);
      } else {
        setUsers(data);
        console.log("✅ Connection successful!");
        console.log("Users table data:", data);
      }
    }

    testDB(); // run once when app loads
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Supabase Test</h1>
       
        <h2>Users Table Data:</h2>

       {users && ( 

        <div>
         {users.map((user) => (
          <p>{user.name} {user.email}</p>
          ))}
       </div>  
            )}
    </div>
  );
}

export default App;
