  "use client";
  
  import Image from "next/image";
  import styles from "../app/styles/Grid.module.css" 
  import { useRouter } from "next/navigation";

  export default function Home() {
    const router = useRouter();
    const handleNavigation = (path) => {
      router.push(path); // Navigate to the specified path
    };
    return (
      <div className="w-[100%]">
        <div className={`${styles.parent} `}>
          <div className={`${styles.div1} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course1")} >  </div>
          <div className={`${styles.div2} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course2")} >  </div>
          <div className={`${styles.div3} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course3")} >  </div>
          <div className={`${styles.div4} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course4")} >  </div>
          <div className={`${styles.div5} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course5")} >  </div>
          <div className={`${styles.div6} w-[100%] h-56 rounded-xl`} onClick={() => handleNavigation("course6")} >  </div>
        </div>
      </div>
    );
  }