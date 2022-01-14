import {useState} from "react";
import {
    Create,
    Form,
    Input,
    Select,
    useSelect,
    IResourceComponentsProps,
    useForm,
    Radio,
} from "@pankod/refine";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import {ICourse, IStudent, IAttendance} from "src/interfaces";
import {number} from "prop-types";

export const AttendanceCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const {formProps, saveButtonProps} = useForm<IAttendance>();

    const {selectProps: studentSelectProps} = useSelect<IStudent>({
        resource: "student",
        optionLabel: "fullname",
        optionValue: "studentid",
    });

    const {selectProps: courseSelectProps} = useSelect<ICourse>({
        resource: "course",
        optionLabel: "coursename",
        optionValue: "courseid",
    });

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Student"
                    name="studentid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...studentSelectProps} />
                </Form.Item>
                <Form.Item
                    label="course"
                    name="courseid"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...courseSelectProps} />
                </Form.Item>

                <Form.Item
                    label="Is attended?"
                    name="isattended"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Date"
                    name="date"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Create>
    );
};
