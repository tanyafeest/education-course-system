import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {IStudent} from "src/interfaces";

export const StudentList: React.FC<IResourceComponentsProps<GetListResponse<IStudent>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<IStudent>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="studentid">
                <Table.Column
                    dataIndex="studentid"
                    key="studentid"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentid", sorter)}
                    sorter
                />

                <Table.Column 
                    dataIndex="firstname"
                    key="firstname"
                    title="Firstname"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("firstname", sorter)}
                    sorter
                /> 
                {/* <TextField value = {"some"}> {console.log(tableProps) }</TextField> */}

                <Table.Column 
                    dataIndex="lastname"
                    key="lastname"
                    title="Lastname"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("lastname", sorter)}
                    sorter
                /> 
                {/* <TextField value = {"some"}> {console.log(tableProps) }</TextField> */}

                <Table.Column
                    dataIndex="school"
                    key="school"
                    title="School"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("school", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="grade"
                    key="grade"
                    title="Grade"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("grade", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="section"
                    key="section"
                    title="Section"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("section", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="userid"
                    key="userid"
                    title="User ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("userid", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="class"
                    key="studentclass"
                    title="Class"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("studentclass", sorter)}
                    sorter
                />
                <Table.Column<IStudent>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.studentid}/>
                            <ShowButton hideText size="small" recordItemId={record.studentid}/>
                            <DeleteButton hideText size="small" recordItemId={record.studentid}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
