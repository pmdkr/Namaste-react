import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("all contact test cases are here",
    ()=>{
        // beforeAll(()=>{
        //     console.log("before all");
        // });

        // beforeEach(()=>{

        //     console.log("before Each");
        // });

        // afterAll(()=>{

        //     console.log("After All");

        // });
        // afterEach(()=>{

        //     console.log("After Each");
        // });
        test("should load heading contact us page",()=>{
    
            render(<Contact/>);
            const heading=screen.getByRole("heading");
        
            expect(heading).toBeInTheDocument();
        
        });
        test("should load button inside contact us page",()=>{
            
            render(<Contact/>);
            const button=screen.getByRole("button")
        
            expect(button).toBeInTheDocument();
        
        });
        test("should load button placeholder inside contact us page",()=>{
            
            render(<Contact/>);
            const buttonPlaceholder=screen.getByPlaceholderText("Name");
        
            expect(buttonPlaceholder).toBeInTheDocument();
        
        });
        test("should load input ooxes inside contact us page",()=>{
            
            render(<Contact/>);
            const inputBoxes=screen.getAllByRole("textbox");
            // console.log(inputBoxes);
        
            expect(inputBoxes.length).toBe(2);
        
        });


    }
);

