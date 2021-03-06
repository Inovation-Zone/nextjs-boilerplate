import React from "react";

import { Button } from "@components";
import Counter from "@components/examples/counter";

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-5 bg-gray-700">
            <div className="container mx-auto">
                <h1 data-test="main-heading" className="text-white text-8xl mb-2">
                    superplate
                </h1>
                <p className="text-lg text-white mb-3">
                    The frontend boilerplate with superpowers!
                </p>
                <Counter />
                <Button type="button">
                    <a
                        data-test="docs-btn-anchor"
                        href="https://pankod.github.io/superplate/"
                    >
                        Docs
                    </a>
                </Button>
            </div>
        </div>
    );
};
