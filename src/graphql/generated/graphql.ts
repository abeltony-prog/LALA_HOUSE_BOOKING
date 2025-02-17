import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://humorous-grizzly-62.hasura.app/v1/graphql", {
    method: "POST",
    ...({"headers":{"x-hasura-admin-secret":"xqVURgYxokUcGBOSmQvGaZb34DmWn3D4ng4zOm3azDAbQdccuLtOti1Y9tVFYO8y"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "hosts" */
export type Hosts = {
  __typename?: 'hosts';
  HID: Scalars['uuid'];
  join_on: Scalars['timestamptz'];
  name: Scalars['String'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "hosts" */
export type Hosts_Aggregate = {
  __typename?: 'hosts_aggregate';
  aggregate?: Maybe<Hosts_Aggregate_Fields>;
  nodes: Array<Hosts>;
};

/** aggregate fields of "hosts" */
export type Hosts_Aggregate_Fields = {
  __typename?: 'hosts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hosts_Max_Fields>;
  min?: Maybe<Hosts_Min_Fields>;
};


/** aggregate fields of "hosts" */
export type Hosts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hosts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "hosts". All fields are combined with a logical 'AND'. */
export type Hosts_Bool_Exp = {
  HID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Hosts_Bool_Exp>>;
  _not?: InputMaybe<Hosts_Bool_Exp>;
  _or?: InputMaybe<Array<Hosts_Bool_Exp>>;
  join_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "hosts" */
export enum Hosts_Constraint {
  /** unique or primary key constraint on columns "HID" */
  HostsHidKey = 'hosts_HID_key',
  /** unique or primary key constraint on columns "user_id" */
  HostsPkey = 'hosts_pkey'
}

/** input type for inserting data into table "hosts" */
export type Hosts_Insert_Input = {
  HID?: InputMaybe<Scalars['uuid']>;
  join_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Hosts_Max_Fields = {
  __typename?: 'hosts_max_fields';
  HID?: Maybe<Scalars['uuid']>;
  join_on?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Hosts_Min_Fields = {
  __typename?: 'hosts_min_fields';
  HID?: Maybe<Scalars['uuid']>;
  join_on?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "hosts" */
export type Hosts_Mutation_Response = {
  __typename?: 'hosts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hosts>;
};

/** on_conflict condition type for table "hosts" */
export type Hosts_On_Conflict = {
  constraint: Hosts_Constraint;
  update_columns?: Array<Hosts_Update_Column>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

/** Ordering options when selecting data from "hosts". */
export type Hosts_Order_By = {
  HID?: InputMaybe<Order_By>;
  join_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hosts */
export type Hosts_Pk_Columns_Input = {
  user_id: Scalars['uuid'];
};

/** select columns of table "hosts" */
export enum Hosts_Select_Column {
  /** column name */
  Hid = 'HID',
  /** column name */
  JoinOn = 'join_on',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "hosts" */
export type Hosts_Set_Input = {
  HID?: InputMaybe<Scalars['uuid']>;
  join_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "hosts" */
export type Hosts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hosts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hosts_Stream_Cursor_Value_Input = {
  HID?: InputMaybe<Scalars['uuid']>;
  join_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "hosts" */
export enum Hosts_Update_Column {
  /** column name */
  Hid = 'HID',
  /** column name */
  JoinOn = 'join_on',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type Hosts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hosts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hosts_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "hosts" */
  delete_hosts?: Maybe<Hosts_Mutation_Response>;
  /** delete single row from the table: "hosts" */
  delete_hosts_by_pk?: Maybe<Hosts>;
  /** delete data from the table: "properties" */
  delete_properties?: Maybe<Properties_Mutation_Response>;
  /** delete single row from the table: "properties" */
  delete_properties_by_pk?: Maybe<Properties>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "hosts" */
  insert_hosts?: Maybe<Hosts_Mutation_Response>;
  /** insert a single row into the table: "hosts" */
  insert_hosts_one?: Maybe<Hosts>;
  /** insert data into the table: "properties" */
  insert_properties?: Maybe<Properties_Mutation_Response>;
  /** insert a single row into the table: "properties" */
  insert_properties_one?: Maybe<Properties>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "hosts" */
  update_hosts?: Maybe<Hosts_Mutation_Response>;
  /** update single row of the table: "hosts" */
  update_hosts_by_pk?: Maybe<Hosts>;
  /** update multiples rows of table: "hosts" */
  update_hosts_many?: Maybe<Array<Maybe<Hosts_Mutation_Response>>>;
  /** update data of the table: "properties" */
  update_properties?: Maybe<Properties_Mutation_Response>;
  /** update single row of the table: "properties" */
  update_properties_by_pk?: Maybe<Properties>;
  /** update multiples rows of table: "properties" */
  update_properties_many?: Maybe<Array<Maybe<Properties_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_HostsArgs = {
  where: Hosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hosts_By_PkArgs = {
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  PID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  UID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_HostsArgs = {
  objects: Array<Hosts_Insert_Input>;
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hosts_OneArgs = {
  object: Hosts_Insert_Input;
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PropertiesArgs = {
  objects: Array<Properties_Insert_Input>;
  on_conflict?: InputMaybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Properties_OneArgs = {
  object: Properties_Insert_Input;
  on_conflict?: InputMaybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_HostsArgs = {
  _set?: InputMaybe<Hosts_Set_Input>;
  where: Hosts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hosts_By_PkArgs = {
  _set?: InputMaybe<Hosts_Set_Input>;
  pk_columns: Hosts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hosts_ManyArgs = {
  updates: Array<Hosts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PropertiesArgs = {
  _set?: InputMaybe<Properties_Set_Input>;
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _set?: InputMaybe<Properties_Set_Input>;
  pk_columns: Properties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Properties_ManyArgs = {
  updates: Array<Properties_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: 'properties';
  PID: Scalars['uuid'];
  bath: Scalars['String'];
  beds: Scalars['String'];
  cost: Scalars['String'];
  description: Scalars['String'];
  host_id: Scalars['uuid'];
  listed_on: Scalars['timestamptz'];
  name: Scalars['String'];
  per: Scalars['String'];
  type: Scalars['String'];
};

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: 'properties_aggregate';
  aggregate?: Maybe<Properties_Aggregate_Fields>;
  nodes: Array<Properties>;
};

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: 'properties_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Properties_Max_Fields>;
  min?: Maybe<Properties_Min_Fields>;
};


/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Properties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  PID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Properties_Bool_Exp>>;
  _not?: InputMaybe<Properties_Bool_Exp>;
  _or?: InputMaybe<Array<Properties_Bool_Exp>>;
  bath?: InputMaybe<String_Comparison_Exp>;
  beds?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  host_id?: InputMaybe<Uuid_Comparison_Exp>;
  listed_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  per?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint on columns "PID" */
  PropertiesPkey = 'properties_pkey'
}

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  PID?: InputMaybe<Scalars['uuid']>;
  bath?: InputMaybe<Scalars['String']>;
  beds?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  listed_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  per?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: 'properties_max_fields';
  PID?: Maybe<Scalars['uuid']>;
  bath?: Maybe<Scalars['String']>;
  beds?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  host_id?: Maybe<Scalars['uuid']>;
  listed_on?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  per?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: 'properties_min_fields';
  PID?: Maybe<Scalars['uuid']>;
  bath?: Maybe<Scalars['String']>;
  beds?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  host_id?: Maybe<Scalars['uuid']>;
  listed_on?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  per?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: 'properties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Properties>;
};

/** on_conflict condition type for table "properties" */
export type Properties_On_Conflict = {
  constraint: Properties_Constraint;
  update_columns?: Array<Properties_Update_Column>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

/** Ordering options when selecting data from "properties". */
export type Properties_Order_By = {
  PID?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  listed_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  per?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: properties */
export type Properties_Pk_Columns_Input = {
  PID: Scalars['uuid'];
};

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  Pid = 'PID',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  Cost = 'cost',
  /** column name */
  Description = 'description',
  /** column name */
  HostId = 'host_id',
  /** column name */
  ListedOn = 'listed_on',
  /** column name */
  Name = 'name',
  /** column name */
  Per = 'per',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  PID?: InputMaybe<Scalars['uuid']>;
  bath?: InputMaybe<Scalars['String']>;
  beds?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  listed_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  per?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "properties" */
export type Properties_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Properties_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Properties_Stream_Cursor_Value_Input = {
  PID?: InputMaybe<Scalars['uuid']>;
  bath?: InputMaybe<Scalars['String']>;
  beds?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  host_id?: InputMaybe<Scalars['uuid']>;
  listed_on?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  per?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  Pid = 'PID',
  /** column name */
  Bath = 'bath',
  /** column name */
  Beds = 'beds',
  /** column name */
  Cost = 'cost',
  /** column name */
  Description = 'description',
  /** column name */
  HostId = 'host_id',
  /** column name */
  ListedOn = 'listed_on',
  /** column name */
  Name = 'name',
  /** column name */
  Per = 'per',
  /** column name */
  Type = 'type'
}

export type Properties_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Properties_Set_Input>;
  /** filter the rows which have to be updated */
  where: Properties_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Query_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Query_RootHosts_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Query_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Query_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Query_RootProperties_By_PkArgs = {
  PID: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  UID: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "hosts" */
  hosts: Array<Hosts>;
  /** fetch aggregated fields from the table: "hosts" */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** fetch data from the table in a streaming manner: "hosts" */
  hosts_stream: Array<Hosts>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** fetch data from the table in a streaming manner: "properties" */
  properties_stream: Array<Properties>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootHosts_By_PkArgs = {
  user_id: Scalars['uuid'];
};


export type Subscription_RootHosts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hosts_Stream_Cursor_Input>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};


export type Subscription_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Subscription_RootProperties_By_PkArgs = {
  PID: Scalars['uuid'];
};


export type Subscription_RootProperties_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Properties_Stream_Cursor_Input>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  UID: Scalars['uuid'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  UID: Scalars['uuid'];
  email: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  UID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "UID" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  UID?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  UID?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  UID?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  UID?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  UID: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Uid = 'UID',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  UID?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  UID?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Uid = 'UID',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddUsersMutationVariables = Exact<{
  role?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type AddUsersMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', UID: any, email: string, gender: string, name: string, password: string, role: string }> };


export const AddUsersDocument = `
    mutation addUsers($role: String = "", $password: String = "", $name: String = "", $gender: String = "", $email: String = "") {
  insert_users(
    objects: {role: $role, password: $password, name: $name, gender: $gender, email: $email}
  ) {
    affected_rows
  }
}
    `;
export const useAddUsersMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddUsersMutation, TError, AddUsersMutationVariables, TContext>) =>
    useMutation<AddUsersMutation, TError, AddUsersMutationVariables, TContext>(
      ['addUsers'],
      (variables?: AddUsersMutationVariables) => fetcher<AddUsersMutation, AddUsersMutationVariables>(AddUsersDocument, variables)(),
      options
    );
useAddUsersMutation.getKey = () => ['addUsers'];

export const GetUsersDocument = `
    query getUsers {
  users {
    UID
    email
    gender
    name
    password
    role
  }
}
    `;
export const useGetUsersQuery = <
      TData = GetUsersQuery,
      TError = unknown
    >(
      variables?: GetUsersQueryVariables,
      options?: UseQueryOptions<GetUsersQuery, TError, TData>
    ) =>
    useQuery<GetUsersQuery, TError, TData>(
      variables === undefined ? ['getUsers'] : ['getUsers', variables],
      fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables),
      options
    );

useGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) => variables === undefined ? ['getUsers'] : ['getUsers', variables];
;
