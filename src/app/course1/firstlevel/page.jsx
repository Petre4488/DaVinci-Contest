    import { TbCircleNumber1 } from "react-icons/tb";
    import { TbCircleNumber2 } from "react-icons/tb";
    import { TbCircleNumber3 } from "react-icons/tb";
    import { TbCircleNumber4 } from "react-icons/tb";
    import { TbCircleNumber5 } from "react-icons/tb";
    import { TbCircleNumber6 } from "react-icons/tb";


    export default function FirstLvl(){
        return(
            <div className="container flex justify-center mt-4">
                <ProgressBar />

            </div>
        )
    }

    const ProgressBarStrucure = ({icon}) => {
        return (
                <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                    <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0 text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                        {icon}
                    </span>
                </li>

        )
    }

    const ProgressBar = () => {
        return(
            <ol className="flex items-center w-[30%]"> 
                <ProgressBarStrucure icon={<TbCircleNumber1/>} />
                <ProgressBarStrucure icon={<TbCircleNumber2/>} />
                <ProgressBarStrucure icon={<TbCircleNumber3/>} />
                <ProgressBarStrucure icon={<TbCircleNumber4/>} />
                <ProgressBarStrucure icon={<TbCircleNumber5/>} />
                <ProgressBarStrucure icon={<TbCircleNumber6/>} />
            </ol>
        )
    }

    