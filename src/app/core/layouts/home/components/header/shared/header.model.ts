export interface Notifications {
    id?: string;
    menu?: Menu;
    sender?: null;
    receiver?: Receiver;
    receivedDate?: string;
    lovMsty?: Lov;
    messageTitle?: string;
    messageContent?: string;
    detailId?: null;
    icon?: string;
    read?: boolean;
}

export interface Lov {
    id: string;
    updatedAt: null;
    version: null;
    isActive: boolean;
    lovType: LovType;
    keyData: string;
    valData: string;
    isDisableable: boolean;
    arg1: null;
}

export interface LovType {
    id: string;
    updatedAt: null;
    version: number;
    code: string;
    name: string;
    arg1: null;
}

export interface Menu {
    id: string;
    code: string;
    name: string;
    module?: MenuModule;
    parent?: string;
    level: number;
    path?: string;
    sortOrder: number;
    isFavorite: boolean;
    version?: number;
}

export interface MenuModule {
    id: string;
    code: string;
    name: string;
    icon: string;
    sortOrder: number;
}

export interface Receiver {
    id: string;
    version: number;
    isActive: boolean;
    person: Person;
    tenant: Tenant;
    userRoles: UserRole[];
    username: string;
    isSa: boolean;
    effBegin: string;
    effEnd: string;
    lastLogin: string;
}

export interface Person {
    id: string;
    version: number;
    idCard: string;
    firstName: string;
    birthDate: string;
    email: string;
    country: Country;
    lovPtyp: Lov;
    lovBlod: Lov;
    lovGndr: Lov;
    lovRlgn: Lov;
    lovMars: Lov;
}

export interface Country {
    id: string;
    updatedAt: null;
    version: number;
    code: string;
    name: string;
    dialCode: string;
    nationality: string;
}

export interface Company {
    id: string;
    updatedAt?: string;
    version: number;
    isActive: boolean;
    code: string;
    name: string;
    description?: string;
    companyTaxNumber: string;
    fileLogo: string;
    taxWithHolderNumber: string;
    taxWithHolderName: string;
    sortOrder: number;
    tenant?: Tenant;
}

export interface Tenant {
    id: string;
    version: number;
    isActive: boolean;
    companies?: Company[];
    tenantModules: TenantModule[];
    name: string;
    code: string;
}

export interface TenantModule {
    id: string;
    version: number;
    isActive: boolean;
    module: TenantModuleModule;
    effBegin: string;
    effEnd: string;
}

export interface TenantModuleModule {
    id: string;
    updatedAt?: string;
    version?: number;
    code: string;
    name: string;
    icon: string;
    path?: string;
    sortOrder: number;
    menus: Menu[];
}

export interface UserRole {
    id: string;
    version: number;
    isActive: boolean;
    role: Role;
}

export interface Role {
    id: string;
    version: number;
    isActive: boolean;
    company: Company;
    name: string;
    description: string;
}