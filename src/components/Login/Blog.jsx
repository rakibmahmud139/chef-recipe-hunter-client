import React from "react";

const Blog = () => {
  return (
    <div data-aos="flip-left" data-aos-duration="3000" className="mt-6 md:mt-24 md:mr-96 md:ml-96 bg-gray-300 p-4 rounded-lg shadow-2xl">
      <h3 className="text-2xl md:text-3xl capitalize font-bold mb-2 mt-6 text-gray-900">
        Q1. Tell us the differences between uncontrolled and controlled
        components?
      </h3>
      <p className="text-gray-900">
        ans: In a controlled component react, state handles all the form data,
        whereas, in an uncontrolled component, the HTML form element data is
        managed by only the DOM. If you are using a controlled component, you
        are in control of your form input values. The developer can decide what
        to insert or not and where to insert it.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mb-2 capitalize mt-6 text-gray-900">
        Q2. How to validate React props using PropTypes?
      </h3>
      <ol className="text-gray-900">
        ans:
        <p>1. Install prop-types package if you haven't already.</p>
        <p>2. Import prop-types in your React component file.</p>
        <p>3. Define the propTypes for your component.</p>
        <p>4. Define the PropTypes for each prop.</p>
      </ol>

      <h3 className="text-2xl md:text-3xl font-bold capitalize mb-2 mt-6 text-gray-900">
        Q3. Tell us the difference between nodejs and express js?
      </h3>
      <p className="text-gray-900">
        ans: NodeJS is a javascript runtime environment for running JavaScript
        programs and is used to build server-side applications. ExpressJS is a
        web framework that enables you to design a web application to handle a
        variety of different HTTP demands. You can use NodeJS to build a
        multi-user, real-time web service.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold capitalize mb-2 mt-6 text-gray-900">
        Q4: What is a custom hook, and why will you create a custom hook?
      </h3>
      <p className="text-gray-900">
        ans: Custom Hooks are typically used for local component state
        management and can handle specific functionality, such as form
        validation or API calls. They promote code reuse and simplify the logic
        within components.
      </p>
    </div>
  );
};

export default Blog;
