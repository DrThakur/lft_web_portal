import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import profile1 from '../assets/images/images.jpg';

const AllJoiners = () => {
    const [recruitments, setRecruitments] = useState([]);
    const [filteredRecruitments, setFilteredRecruitments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentRecruitment, setCurrentRecruitment] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const toast = useRef(null);
    const navigate = useNavigate();

    const statuses = [
        { label: 'Onboarded', value: 'Onboarded' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Pending', value: 'Pending' },
    ];

    const roles = [
        { label: 'Project Manager', value: 'Project Manager' },
        { label: 'Web Developer', value: 'Web Developer' },
        { label: 'Data Scientist', value: 'Data Scientist' },
        { label: 'FPGA Engineer', value: 'FPGA Engineer' },
        { label: 'Sr Verification Engineer', value: 'Sr Verification Engineer' },
    ];

    const managers = [
        { label: 'Dhruv Kumar Saxena', value: 'Dhruv Kumar Saxena' },
        { label: 'Amritpreet Singh', value: 'Amritpreet Singh' },
        { label: 'Rajkumar Rao', value: 'Rajkumar Rao' },
    ];


    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        // Filter by both name and role
        setFilteredRecruitments(
            recruitments.filter(
                (recruitment) =>
                    recruitment.fullName.toLowerCase().includes(value) ||
                    recruitment.roleAppliedFor.toLowerCase().includes(value)
            )
        );
    };

    const getSeverity = (recruitment) => {
        switch (recruitment.status) {
            case 'Onboarded':
                return 'success';
            case 'In Progress':
                return 'warning';
            case 'Pending':
                return 'danger';
            default:
                return null;
        }
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData)} />;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex justify-start gap-3 lg:gap-10 items-center">
                <Button
                    icon="pi pi-pencil text-blue-400"
                    className="border border-blue-400 rounded-full"
                    rounded
                    outlined
                    onClick={() => onEditClick(rowData)}
                />
                <Button
                    icon="pi pi-trash text-red-400"
                    className="border border-red-400 rounded-full"
                    severity="danger"
                    outlined
                    rounded
                    onClick={() => onDeleteClick(rowData)}
                />
            </div>
        );
    };

    const onEditClick = (rowData) => {
        setCurrentRecruitment({ ...rowData });
        setDialogVisible(true);
    };

    const onDeleteClick = (rowData) => {
        confirmDialog({
            message: `Are you sure you want to delete ${rowData.fullName}?`,
            header: 'Confirm Deletion',
            icon: 'pi pi-exclamation-triangle',
            accept: () => handleDelete(rowData),
            reject: () => toast.current.show({ severity: 'info', summary: 'Cancelled', detail: 'Deletion cancelled', life: 2000 }),
        });
    };

    const handleDelete = (rowData) => {
        const updated = recruitments.filter((item) => item.fullName !== rowData.fullName);
        setRecruitments(updated);
        setFilteredRecruitments(updated);
        toast.current.show({ severity: 'success', summary: 'Deleted', detail: `${rowData.fullName} removed`, life: 2000 });
    };

    const handleSave = () => {
        const updated = recruitments.map((r) =>
            r.fullName === currentRecruitment.fullName ? currentRecruitment : r
        );
        setRecruitments(updated);
        setFilteredRecruitments(updated);
        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Joiner info updated', life: 2000 });
        setDialogVisible(false);
    };

    useEffect(() => {
        const recruitmentData = [
            {
                fullName: 'Ankit Kumar Thakur',
                profilePic: profile1,
                roleAppliedFor: 'Project Manager',
                reportingManager: 'Dhruv Kumar Saxena',
                status: 'Onboarded',
            },
            {
                fullName: 'Abhishek Kumar Thakur',
                profilePic: profile1,
                roleAppliedFor: 'Web Developer',
                reportingManager: 'Amritpreet Singh',
                status: 'In Progress',
            },
            {
                fullName: 'Rajkumar Rao',
                profilePic: profile1,
                roleAppliedFor: 'Data Scientist',
                reportingManager: 'Dhruv Kumar Saxena',
                status: 'Pending',
            },
            {
                fullName: 'Bajirao Mastani',
                profilePic: profile1,
                roleAppliedFor: 'FPGA Engineer',
                reportingManager: 'Amritpreet Singh',
                status: 'Onboarded',
            },
            {
                fullName: 'Rinku Jain',
                profilePic: profile1,
                roleAppliedFor: 'Sr Verification Engineer',
                reportingManager: 'Dhruv Kumar Saxena',
                status: 'In Progress',
            },
        ];
        setRecruitments(recruitmentData);
        setFilteredRecruitments(recruitmentData);
    }, []);

    return (
        <div className="p-6 w-full bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 rounded-lg shadow-2xl max-h-screen relative">
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="flex justify-between items-center gap-1 mb-4 p-4 bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 rounded-lg shadow-2xl">
                <h3 className="font-bold text-white text-xl">All Joiners</h3>
                <Button
                    label="Back to Dashboard"
                    onClick={() => navigate('/dashboard')}
                    className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600 rounded-md px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-2xl"
                />
            </div>



            <div className="mb-4">
                <InputText
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by Full Name or Role"
                    className="w-full p-inputtext-sm"
                />
            </div>

            {/* <DataTable
                value={filteredRecruitments}
                paginator
                rows={10}
                responsiveLayout="scroll"
                scrollHeight='50%'
                className="p-datatable-striped p-datatable-hoverable-rows"
            >   */}
            
            <DataTable
                value={filteredRecruitments}
                paginator
                rows={10}
                responsiveLayout="scroll"
                className="p-datatable-striped p-datatable-hoverable-rows"
                emptyMessage="No records found."
                showGridlines
            >
                <Column
                    field="fullName"
                    header="Full Name"
                    body={(rowData) => (
                        <div className="flex items-center">
                            <img src={rowData.profilePic} alt="profile" className="rounded-full mr-2" width={40} height={40} />
                            {rowData.fullName}
                        </div>
                    )}
                    style={{ width: '25%' }}
                />
                <Column field="roleAppliedFor" header="Role" style={{ width: '15%' }} />
                <Column field="reportingManager" header="Reporting Manager" style={{ width: '15%' }} />
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '15%' }} />
                <Column field="action" header="Action" body={actionBodyTemplate} style={{ width: '15%' }} />
            </DataTable>

            <Dialog
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
                header="Edit Joiner"
                className="w-full md:w-1/2"
                footer={
                    <div>
                        <Button label="Cancel" icon="pi pi-times" onClick={() => setDialogVisible(false)} className="p-button-text" />
                        <Button label="Save" icon="pi pi-check" onClick={handleSave} />
                    </div>
                }
            >
                {currentRecruitment && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label className="font-bold mb-1">Full Name</label>
                            <InputText
                                value={currentRecruitment.fullName}
                                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, fullName: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold mb-1">Role Applied For</label>
                            <Dropdown
                                value={currentRecruitment.roleAppliedFor}
                                options={roles}
                                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, roleAppliedFor: e.value })}
                                placeholder="Select Role"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold mb-1">Reporting Manager</label>
                            <Dropdown
                                value={currentRecruitment.reportingManager}
                                options={managers}
                                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, reportingManager: e.value })}
                                placeholder="Select Reporting Manager"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold mb-1">Status</label>
                            <Dropdown
                                value={currentRecruitment.status}
                                options={statuses}
                                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, status: e.value })}
                                placeholder="Select Status"
                            />
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
};

export default AllJoiners;
