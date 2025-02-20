import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(
      "https://humorous-grizzly-62.hasura.app/v1/graphql",
      {
        method: "POST",
        ...{
          headers: {
            "x-hasura-admin-secret":
              "xqVURgYxokUcGBOSmQvGaZb34DmWn3D4ng4zOm3azDAbQdccuLtOti1Y9tVFYO8y",
          },
        },
        body: JSON.stringify({ query, variables }),
      }
    );

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "bookings" */
export type Bookings = {
  __typename?: "bookings";
  BID: Scalars["uuid"];
  done_on: Scalars["timestamptz"];
  from_date: Scalars["String"];
  people?: Maybe<Scalars["String"]>;
  /** An object relationship */
  property: Properties;
  property_id: Scalars["uuid"];
  status: Scalars["String"];
  to_date: Scalars["String"];
  user_id?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  users?: Maybe<Users>;
};

/** aggregated selection of "bookings" */
export type Bookings_Aggregate = {
  __typename?: "bookings_aggregate";
  aggregate?: Maybe<Bookings_Aggregate_Fields>;
  nodes: Array<Bookings>;
};

export type Bookings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bookings_Aggregate_Bool_Exp_Count>;
};

export type Bookings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bookings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Bookings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_Fields = {
  __typename?: "bookings_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Bookings_Max_Fields>;
  min?: Maybe<Bookings_Min_Fields>;
};

/** aggregate fields of "bookings" */
export type Bookings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bookings_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "bookings" */
export type Bookings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bookings_Max_Order_By>;
  min?: InputMaybe<Bookings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bookings" */
export type Bookings_Arr_Rel_Insert_Input = {
  data: Array<Bookings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bookings". All fields are combined with a logical 'AND'. */
export type Bookings_Bool_Exp = {
  BID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Bookings_Bool_Exp>>;
  _not?: InputMaybe<Bookings_Bool_Exp>;
  _or?: InputMaybe<Array<Bookings_Bool_Exp>>;
  done_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  from_date?: InputMaybe<String_Comparison_Exp>;
  people?: InputMaybe<String_Comparison_Exp>;
  property?: InputMaybe<Properties_Bool_Exp>;
  property_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  to_date?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "bookings" */
export enum Bookings_Constraint {
  /** unique or primary key constraint on columns "BID" */
  BookingsPkey = "bookings_pkey",
}

/** input type for inserting data into table "bookings" */
export type Bookings_Insert_Input = {
  BID?: InputMaybe<Scalars["uuid"]>;
  done_on?: InputMaybe<Scalars["timestamptz"]>;
  from_date?: InputMaybe<Scalars["String"]>;
  people?: InputMaybe<Scalars["String"]>;
  property?: InputMaybe<Properties_Obj_Rel_Insert_Input>;
  property_id?: InputMaybe<Scalars["uuid"]>;
  status?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
  users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Bookings_Max_Fields = {
  __typename?: "bookings_max_fields";
  BID?: Maybe<Scalars["uuid"]>;
  done_on?: Maybe<Scalars["timestamptz"]>;
  from_date?: Maybe<Scalars["String"]>;
  people?: Maybe<Scalars["String"]>;
  property_id?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  to_date?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "bookings" */
export type Bookings_Max_Order_By = {
  BID?: InputMaybe<Order_By>;
  done_on?: InputMaybe<Order_By>;
  from_date?: InputMaybe<Order_By>;
  people?: InputMaybe<Order_By>;
  property_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bookings_Min_Fields = {
  __typename?: "bookings_min_fields";
  BID?: Maybe<Scalars["uuid"]>;
  done_on?: Maybe<Scalars["timestamptz"]>;
  from_date?: Maybe<Scalars["String"]>;
  people?: Maybe<Scalars["String"]>;
  property_id?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  to_date?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "bookings" */
export type Bookings_Min_Order_By = {
  BID?: InputMaybe<Order_By>;
  done_on?: InputMaybe<Order_By>;
  from_date?: InputMaybe<Order_By>;
  people?: InputMaybe<Order_By>;
  property_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bookings" */
export type Bookings_Mutation_Response = {
  __typename?: "bookings_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Bookings>;
};

/** on_conflict condition type for table "bookings" */
export type Bookings_On_Conflict = {
  constraint: Bookings_Constraint;
  update_columns?: Array<Bookings_Update_Column>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** Ordering options when selecting data from "bookings". */
export type Bookings_Order_By = {
  BID?: InputMaybe<Order_By>;
  done_on?: InputMaybe<Order_By>;
  from_date?: InputMaybe<Order_By>;
  people?: InputMaybe<Order_By>;
  property?: InputMaybe<Properties_Order_By>;
  property_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  to_date?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  users?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: bookings */
export type Bookings_Pk_Columns_Input = {
  BID: Scalars["uuid"];
};

/** select columns of table "bookings" */
export enum Bookings_Select_Column {
  /** column name */
  Bid = "BID",
  /** column name */
  DoneOn = "done_on",
  /** column name */
  FromDate = "from_date",
  /** column name */
  People = "people",
  /** column name */
  PropertyId = "property_id",
  /** column name */
  Status = "status",
  /** column name */
  ToDate = "to_date",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "bookings" */
export type Bookings_Set_Input = {
  BID?: InputMaybe<Scalars["uuid"]>;
  done_on?: InputMaybe<Scalars["timestamptz"]>;
  from_date?: InputMaybe<Scalars["String"]>;
  people?: InputMaybe<Scalars["String"]>;
  property_id?: InputMaybe<Scalars["uuid"]>;
  status?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "bookings" */
export type Bookings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bookings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bookings_Stream_Cursor_Value_Input = {
  BID?: InputMaybe<Scalars["uuid"]>;
  done_on?: InputMaybe<Scalars["timestamptz"]>;
  from_date?: InputMaybe<Scalars["String"]>;
  people?: InputMaybe<Scalars["String"]>;
  property_id?: InputMaybe<Scalars["uuid"]>;
  status?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "bookings" */
export enum Bookings_Update_Column {
  /** column name */
  Bid = "BID",
  /** column name */
  DoneOn = "done_on",
  /** column name */
  FromDate = "from_date",
  /** column name */
  People = "people",
  /** column name */
  PropertyId = "property_id",
  /** column name */
  Status = "status",
  /** column name */
  ToDate = "to_date",
  /** column name */
  UserId = "user_id",
}

export type Bookings_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bookings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bookings_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "hosts" */
export type Hosts = {
  __typename?: "hosts";
  HID: Scalars["uuid"];
  join_on: Scalars["timestamptz"];
  name: Scalars["String"];
  /** An array relationship */
  properties: Array<Properties>;
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"];
};

/** columns and relationships of "hosts" */
export type HostsPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

/** columns and relationships of "hosts" */
export type HostsProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

/** aggregated selection of "hosts" */
export type Hosts_Aggregate = {
  __typename?: "hosts_aggregate";
  aggregate?: Maybe<Hosts_Aggregate_Fields>;
  nodes: Array<Hosts>;
};

export type Hosts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Hosts_Aggregate_Bool_Exp_Count>;
};

export type Hosts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Hosts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Hosts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "hosts" */
export type Hosts_Aggregate_Fields = {
  __typename?: "hosts_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Hosts_Max_Fields>;
  min?: Maybe<Hosts_Min_Fields>;
};

/** aggregate fields of "hosts" */
export type Hosts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hosts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "hosts" */
export type Hosts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hosts_Max_Order_By>;
  min?: InputMaybe<Hosts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "hosts" */
export type Hosts_Arr_Rel_Insert_Input = {
  data: Array<Hosts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "hosts". All fields are combined with a logical 'AND'. */
export type Hosts_Bool_Exp = {
  HID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Hosts_Bool_Exp>>;
  _not?: InputMaybe<Hosts_Bool_Exp>;
  _or?: InputMaybe<Array<Hosts_Bool_Exp>>;
  join_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  properties?: InputMaybe<Properties_Bool_Exp>;
  properties_aggregate?: InputMaybe<Properties_Aggregate_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "hosts" */
export enum Hosts_Constraint {
  /** unique or primary key constraint on columns "HID" */
  HostsHidKey = "hosts_HID_key",
  /** unique or primary key constraint on columns "user_id" */
  HostsPkey = "hosts_pkey",
}

/** input type for inserting data into table "hosts" */
export type Hosts_Insert_Input = {
  HID?: InputMaybe<Scalars["uuid"]>;
  join_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  properties?: InputMaybe<Properties_Arr_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type Hosts_Max_Fields = {
  __typename?: "hosts_max_fields";
  HID?: Maybe<Scalars["uuid"]>;
  join_on?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "hosts" */
export type Hosts_Max_Order_By = {
  HID?: InputMaybe<Order_By>;
  join_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hosts_Min_Fields = {
  __typename?: "hosts_min_fields";
  HID?: Maybe<Scalars["uuid"]>;
  join_on?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "hosts" */
export type Hosts_Min_Order_By = {
  HID?: InputMaybe<Order_By>;
  join_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hosts" */
export type Hosts_Mutation_Response = {
  __typename?: "hosts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Hosts>;
};

/** input type for inserting object relation for remote table "hosts" */
export type Hosts_Obj_Rel_Insert_Input = {
  data: Hosts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Hosts_On_Conflict>;
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
  properties_aggregate?: InputMaybe<Properties_Aggregate_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hosts */
export type Hosts_Pk_Columns_Input = {
  user_id: Scalars["uuid"];
};

/** select columns of table "hosts" */
export enum Hosts_Select_Column {
  /** column name */
  Hid = "HID",
  /** column name */
  JoinOn = "join_on",
  /** column name */
  Name = "name",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "hosts" */
export type Hosts_Set_Input = {
  HID?: InputMaybe<Scalars["uuid"]>;
  join_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
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
  HID?: InputMaybe<Scalars["uuid"]>;
  join_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "hosts" */
export enum Hosts_Update_Column {
  /** column name */
  Hid = "HID",
  /** column name */
  JoinOn = "join_on",
  /** column name */
  Name = "name",
  /** column name */
  UserId = "user_id",
}

export type Hosts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hosts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hosts_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "bookings" */
  delete_bookings?: Maybe<Bookings_Mutation_Response>;
  /** delete single row from the table: "bookings" */
  delete_bookings_by_pk?: Maybe<Bookings>;
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
  /** insert data into the table: "bookings" */
  insert_bookings?: Maybe<Bookings_Mutation_Response>;
  /** insert a single row into the table: "bookings" */
  insert_bookings_one?: Maybe<Bookings>;
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
  /** update data of the table: "bookings" */
  update_bookings?: Maybe<Bookings_Mutation_Response>;
  /** update single row of the table: "bookings" */
  update_bookings_by_pk?: Maybe<Bookings>;
  /** update multiples rows of table: "bookings" */
  update_bookings_many?: Maybe<Array<Maybe<Bookings_Mutation_Response>>>;
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
export type Mutation_RootDelete_BookingsArgs = {
  where: Bookings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bookings_By_PkArgs = {
  BID: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_HostsArgs = {
  where: Hosts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Hosts_By_PkArgs = {
  user_id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  PID: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  UID: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_BookingsArgs = {
  objects: Array<Bookings_Insert_Input>;
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bookings_OneArgs = {
  object: Bookings_Insert_Input;
  on_conflict?: InputMaybe<Bookings_On_Conflict>;
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
export type Mutation_RootUpdate_BookingsArgs = {
  _set?: InputMaybe<Bookings_Set_Input>;
  where: Bookings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bookings_By_PkArgs = {
  _set?: InputMaybe<Bookings_Set_Input>;
  pk_columns: Bookings_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bookings_ManyArgs = {
  updates: Array<Bookings_Updates>;
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
  _append?: InputMaybe<Properties_Append_Input>;
  _delete_at_path?: InputMaybe<Properties_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Properties_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Properties_Delete_Key_Input>;
  _prepend?: InputMaybe<Properties_Prepend_Input>;
  _set?: InputMaybe<Properties_Set_Input>;
  where: Properties_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _append?: InputMaybe<Properties_Append_Input>;
  _delete_at_path?: InputMaybe<Properties_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Properties_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Properties_Delete_Key_Input>;
  _prepend?: InputMaybe<Properties_Prepend_Input>;
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
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: "properties";
  PID: Scalars["uuid"];
  amenities?: Maybe<Scalars["jsonb"]>;
  bath: Scalars["String"];
  beds: Scalars["String"];
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  cost: Scalars["String"];
  description: Scalars["String"];
  host_id: Scalars["uuid"];
  /** An object relationship */
  hosts: Hosts;
  image?: Maybe<Scalars["String"]>;
  listed_on: Scalars["timestamptz"];
  name: Scalars["String"];
  per: Scalars["String"];
  type: Scalars["String"];
};

/** columns and relationships of "properties" */
export type PropertiesAmenitiesArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "properties" */
export type PropertiesBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** columns and relationships of "properties" */
export type PropertiesBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: "properties_aggregate";
  aggregate?: Maybe<Properties_Aggregate_Fields>;
  nodes: Array<Properties>;
};

export type Properties_Aggregate_Bool_Exp = {
  count?: InputMaybe<Properties_Aggregate_Bool_Exp_Count>;
};

export type Properties_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Properties_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<Properties_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: "properties_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Properties_Max_Fields>;
  min?: Maybe<Properties_Min_Fields>;
};

/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Properties_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "properties" */
export type Properties_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Properties_Max_Order_By>;
  min?: InputMaybe<Properties_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Properties_Append_Input = {
  amenities?: InputMaybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "properties" */
export type Properties_Arr_Rel_Insert_Input = {
  data: Array<Properties_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Properties_On_Conflict>;
};

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  PID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Properties_Bool_Exp>>;
  _not?: InputMaybe<Properties_Bool_Exp>;
  _or?: InputMaybe<Array<Properties_Bool_Exp>>;
  amenities?: InputMaybe<Jsonb_Comparison_Exp>;
  bath?: InputMaybe<String_Comparison_Exp>;
  beds?: InputMaybe<String_Comparison_Exp>;
  bookings?: InputMaybe<Bookings_Bool_Exp>;
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Bool_Exp>;
  cost?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  host_id?: InputMaybe<Uuid_Comparison_Exp>;
  hosts?: InputMaybe<Hosts_Bool_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  listed_on?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  per?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint on columns "PID" */
  PropertiesPkey = "properties_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Properties_Delete_At_Path_Input = {
  amenities?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Properties_Delete_Elem_Input = {
  amenities?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Properties_Delete_Key_Input = {
  amenities?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  PID?: InputMaybe<Scalars["uuid"]>;
  amenities?: InputMaybe<Scalars["jsonb"]>;
  bath?: InputMaybe<Scalars["String"]>;
  beds?: InputMaybe<Scalars["String"]>;
  bookings?: InputMaybe<Bookings_Arr_Rel_Insert_Input>;
  cost?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  host_id?: InputMaybe<Scalars["uuid"]>;
  hosts?: InputMaybe<Hosts_Obj_Rel_Insert_Input>;
  image?: InputMaybe<Scalars["String"]>;
  listed_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  per?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: "properties_max_fields";
  PID?: Maybe<Scalars["uuid"]>;
  bath?: Maybe<Scalars["String"]>;
  beds?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  host_id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  listed_on?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  per?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "properties" */
export type Properties_Max_Order_By = {
  PID?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  listed_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  per?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: "properties_min_fields";
  PID?: Maybe<Scalars["uuid"]>;
  bath?: Maybe<Scalars["String"]>;
  beds?: Maybe<Scalars["String"]>;
  cost?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  host_id?: Maybe<Scalars["uuid"]>;
  image?: Maybe<Scalars["String"]>;
  listed_on?: Maybe<Scalars["timestamptz"]>;
  name?: Maybe<Scalars["String"]>;
  per?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "properties" */
export type Properties_Min_Order_By = {
  PID?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  listed_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  per?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: "properties_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Properties>;
};

/** input type for inserting object relation for remote table "properties" */
export type Properties_Obj_Rel_Insert_Input = {
  data: Properties_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Properties_On_Conflict>;
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
  amenities?: InputMaybe<Order_By>;
  bath?: InputMaybe<Order_By>;
  beds?: InputMaybe<Order_By>;
  bookings_aggregate?: InputMaybe<Bookings_Aggregate_Order_By>;
  cost?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  host_id?: InputMaybe<Order_By>;
  hosts?: InputMaybe<Hosts_Order_By>;
  image?: InputMaybe<Order_By>;
  listed_on?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  per?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: properties */
export type Properties_Pk_Columns_Input = {
  PID: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Properties_Prepend_Input = {
  amenities?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  Pid = "PID",
  /** column name */
  Amenities = "amenities",
  /** column name */
  Bath = "bath",
  /** column name */
  Beds = "beds",
  /** column name */
  Cost = "cost",
  /** column name */
  Description = "description",
  /** column name */
  HostId = "host_id",
  /** column name */
  Image = "image",
  /** column name */
  ListedOn = "listed_on",
  /** column name */
  Name = "name",
  /** column name */
  Per = "per",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  PID?: InputMaybe<Scalars["uuid"]>;
  amenities?: InputMaybe<Scalars["jsonb"]>;
  bath?: InputMaybe<Scalars["String"]>;
  beds?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  host_id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  listed_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  per?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
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
  PID?: InputMaybe<Scalars["uuid"]>;
  amenities?: InputMaybe<Scalars["jsonb"]>;
  bath?: InputMaybe<Scalars["String"]>;
  beds?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  host_id?: InputMaybe<Scalars["uuid"]>;
  image?: InputMaybe<Scalars["String"]>;
  listed_on?: InputMaybe<Scalars["timestamptz"]>;
  name?: InputMaybe<Scalars["String"]>;
  per?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  Pid = "PID",
  /** column name */
  Amenities = "amenities",
  /** column name */
  Bath = "bath",
  /** column name */
  Beds = "beds",
  /** column name */
  Cost = "cost",
  /** column name */
  Description = "description",
  /** column name */
  HostId = "host_id",
  /** column name */
  Image = "image",
  /** column name */
  ListedOn = "listed_on",
  /** column name */
  Name = "name",
  /** column name */
  Per = "per",
  /** column name */
  Type = "type",
}

export type Properties_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Properties_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Properties_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Properties_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Properties_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Properties_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Properties_Set_Input>;
  /** filter the rows which have to be updated */
  where: Properties_Bool_Exp;
};

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** An array relationship */
  hosts: Array<Hosts>;
  /** An aggregate relationship */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** An array relationship */
  properties: Array<Properties>;
  /** An aggregate relationship */
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

export type Query_RootBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Query_RootBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Query_RootBookings_By_PkArgs = {
  BID: Scalars["uuid"];
};

export type Query_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

export type Query_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

export type Query_RootHosts_By_PkArgs = {
  user_id: Scalars["uuid"];
};

export type Query_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

export type Query_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

export type Query_RootProperties_By_PkArgs = {
  PID: Scalars["uuid"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  UID: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  bookings: Array<Bookings>;
  /** An aggregate relationship */
  bookings_aggregate: Bookings_Aggregate;
  /** fetch data from the table: "bookings" using primary key columns */
  bookings_by_pk?: Maybe<Bookings>;
  /** fetch data from the table in a streaming manner: "bookings" */
  bookings_stream: Array<Bookings>;
  /** An array relationship */
  hosts: Array<Hosts>;
  /** An aggregate relationship */
  hosts_aggregate: Hosts_Aggregate;
  /** fetch data from the table: "hosts" using primary key columns */
  hosts_by_pk?: Maybe<Hosts>;
  /** fetch data from the table in a streaming manner: "hosts" */
  hosts_stream: Array<Hosts>;
  /** An array relationship */
  properties: Array<Properties>;
  /** An aggregate relationship */
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

export type Subscription_RootBookingsArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootBookings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookings_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Bookings_Order_By>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootBookings_By_PkArgs = {
  BID: Scalars["uuid"];
};

export type Subscription_RootBookings_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Bookings_Stream_Cursor_Input>>;
  where?: InputMaybe<Bookings_Bool_Exp>;
};

export type Subscription_RootHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

export type Subscription_RootHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

export type Subscription_RootHosts_By_PkArgs = {
  user_id: Scalars["uuid"];
};

export type Subscription_RootHosts_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Hosts_Stream_Cursor_Input>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

export type Subscription_RootPropertiesArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Properties_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Properties_Order_By>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

export type Subscription_RootProperties_By_PkArgs = {
  PID: Scalars["uuid"];
};

export type Subscription_RootProperties_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Properties_Stream_Cursor_Input>>;
  where?: InputMaybe<Properties_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  UID: Scalars["uuid"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  UID: Scalars["uuid"];
  email: Scalars["String"];
  gender: Scalars["String"];
  /** An array relationship */
  hosts: Array<Hosts>;
  /** An aggregate relationship */
  hosts_aggregate: Hosts_Aggregate;
  name: Scalars["String"];
  password: Scalars["String"];
  role: Scalars["String"];
};

/** columns and relationships of "users" */
export type UsersHostsArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersHosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hosts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Hosts_Order_By>>;
  where?: InputMaybe<Hosts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  UID?: InputMaybe<Uuid_Comparison_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  hosts?: InputMaybe<Hosts_Bool_Exp>;
  hosts_aggregate?: InputMaybe<Hosts_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "UID" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  UID?: InputMaybe<Scalars["uuid"]>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  hosts?: InputMaybe<Hosts_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  UID?: Maybe<Scalars["uuid"]>;
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  UID?: Maybe<Scalars["uuid"]>;
  email?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
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
  hosts_aggregate?: InputMaybe<Hosts_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  UID: Scalars["uuid"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Uid = "UID",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Role = "role",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  UID?: InputMaybe<Scalars["uuid"]>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
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
  UID?: InputMaybe<Scalars["uuid"]>;
  email?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Uid = "UID",
  /** column name */
  Email = "email",
  /** column name */
  Gender = "gender",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Role = "role",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type AddNewPropertyMutationVariables = Exact<{
  bath?: InputMaybe<Scalars["String"]>;
  beds?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  host_id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  per?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  amenities?: InputMaybe<Scalars["jsonb"]>;
  image?: InputMaybe<Scalars["String"]>;
}>;

export type AddNewPropertyMutation = {
  __typename?: "mutation_root";
  insert_properties?: {
    __typename?: "properties_mutation_response";
    affected_rows: number;
  } | null;
};

export type AddUsersMutationVariables = Exact<{
  role?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  gender?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
}>;

export type AddUsersMutation = {
  __typename?: "mutation_root";
  insert_users?: {
    __typename?: "users_mutation_response";
    affected_rows: number;
  } | null;
};

export type AddPropertyBookingsMutationVariables = Exact<{
  from_date?: InputMaybe<Scalars["String"]>;
  people?: InputMaybe<Scalars["String"]>;
  property_id?: InputMaybe<Scalars["uuid"]>;
  status?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["String"]>;
  user_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type AddPropertyBookingsMutation = {
  __typename?: "mutation_root";
  insert_bookings?: {
    __typename?: "bookings_mutation_response";
    affected_rows: number;
  } | null;
};

export type MakeUseraHostMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
}>;

export type MakeUseraHostMutation = {
  __typename?: "mutation_root";
  insert_hosts?: {
    __typename?: "hosts_mutation_response";
    affected_rows: number;
  } | null;
  update_users?: {
    __typename?: "users_mutation_response";
    affected_rows: number;
  } | null;
};

export type RemoveBookingsWherebooking_IdMutationVariables = Exact<{
  booking_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type RemoveBookingsWherebooking_IdMutation = {
  __typename?: "mutation_root";
  delete_bookings?: {
    __typename?: "bookings_mutation_response";
    affected_rows: number;
  } | null;
};

export type GetBookingsWhereUser_IdQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type GetBookingsWhereUser_IdQuery = {
  __typename?: "query_root";
  bookings: Array<{
    __typename?: "bookings";
    user_id?: any | null;
    to_date: string;
    status: string;
    property_id: any;
    people?: string | null;
    from_date: string;
    done_on: any;
    BID: any;
    property: {
      __typename?: "properties";
      PID: any;
      amenities?: any | null;
      bath: string;
      beds: string;
      cost: string;
      description: string;
      host_id: any;
      image?: string | null;
      listed_on: any;
      name: string;
      per: string;
      type: string;
      hosts: { __typename?: "hosts"; name: string; HID: any };
    };
  }>;
};

export type GetAllHostsBookingsQueryVariables = Exact<{
  host_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type GetAllHostsBookingsQuery = {
  __typename?: "query_root";
  bookings: Array<{
    __typename?: "bookings";
    user_id?: any | null;
    to_date: string;
    status: string;
    property_id: any;
    people?: string | null;
    from_date: string;
    done_on: any;
    BID: any;
    property: {
      __typename?: "properties";
      PID: any;
      amenities?: any | null;
      bath: string;
      beds: string;
      cost: string;
      description: string;
      host_id: any;
      image?: string | null;
      listed_on: any;
      name: string;
      per: string;
      type: string;
      hosts: { __typename?: "hosts"; HID: any; name: string };
      bookings: Array<{
        __typename?: "bookings";
        BID: any;
        done_on: any;
        from_date: string;
        people?: string | null;
        property_id: any;
        status: string;
        to_date: string;
        user_id?: any | null;
        users?: {
          __typename?: "users";
          UID: any;
          email: string;
          name: string;
        } | null;
      }>;
    };
    users?: {
      __typename?: "users";
      name: string;
      UID: any;
      email: string;
    } | null;
  }>;
};

export type GetAllPropertiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPropertiesQuery = {
  __typename?: "query_root";
  properties: Array<{
    __typename?: "properties";
    type: string;
    per: string;
    name: string;
    listed_on: any;
    image?: string | null;
    host_id: any;
    description: string;
    cost: string;
    beds: string;
    bath: string;
    amenities?: any | null;
    PID: any;
    hosts: {
      __typename?: "hosts";
      HID: any;
      name: string;
      user: { __typename?: "users"; email: string; name: string };
    };
    bookings: Array<{
      __typename?: "bookings";
      BID: any;
      done_on: any;
      from_date: string;
      people?: string | null;
      property_id: any;
      status: string;
      to_date: string;
      user_id?: any | null;
    }>;
  }>;
};

export type GetUsersQueryVariables = Exact<{
  email?: InputMaybe<Scalars["String"]>;
}>;

export type GetUsersQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "users";
    UID: any;
    email: string;
    gender: string;
    name: string;
    password: string;
    role: string;
    hosts: Array<{
      __typename?: "hosts";
      HID: any;
      join_on: any;
      name: string;
      user_id: any;
      properties: Array<{
        __typename?: "properties";
        type: string;
        per: string;
        name: string;
        listed_on: any;
        host_id: any;
        description: string;
        cost: string;
        beds: string;
        bath: string;
        PID: any;
        amenities?: any | null;
        image?: string | null;
      }>;
    }>;
  }>;
};

export type UpdateBookingStatusMutationVariables = Exact<{
  status?: InputMaybe<Scalars["String"]>;
  booking_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type UpdateBookingStatusMutation = {
  __typename?: "mutation_root";
  update_bookings?: {
    __typename?: "bookings_mutation_response";
    affected_rows: number;
  } | null;
};

export type UpdatePropertyWherePropertyIdMutationVariables = Exact<{
  property_id?: InputMaybe<Scalars["uuid"]>;
  amenities?: InputMaybe<Scalars["jsonb"]>;
  bath?: InputMaybe<Scalars["String"]>;
  beds?: InputMaybe<Scalars["String"]>;
  cost?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  per?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
}>;

export type UpdatePropertyWherePropertyIdMutation = {
  __typename?: "mutation_root";
  update_properties?: {
    __typename?: "properties_mutation_response";
    affected_rows: number;
  } | null;
};

export type UpdateUserRoleWhereUser_IdMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateUserRoleWhereUser_IdMutation = {
  __typename?: "mutation_root";
  update_users?: {
    __typename?: "users_mutation_response";
    affected_rows: number;
  } | null;
};

export type ValidateAvailablePropertiesQueryVariables = Exact<{
  property_id?: InputMaybe<Scalars["uuid"]>;
}>;

export type ValidateAvailablePropertiesQuery = {
  __typename?: "query_root";
  bookings: Array<{
    __typename?: "bookings";
    BID: any;
    done_on: any;
    from_date: string;
    property_id: any;
    status: string;
    to_date: string;
  }>;
};

export const AddNewPropertyDocument = `
    mutation AddNewProperty($bath: String = "", $beds: String = "", $cost: String = "", $description: String = "", $host_id: uuid = "", $name: String = "", $per: String = "", $type: String = "", $amenities: jsonb = "", $image: String = "") {
  insert_properties(
    objects: {bath: $bath, beds: $beds, cost: $cost, description: $description, host_id: $host_id, name: $name, per: $per, type: $type, amenities: $amenities, image: $image}
  ) {
    affected_rows
  }
}
    `;
export const useAddNewPropertyMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddNewPropertyMutation,
    TError,
    AddNewPropertyMutationVariables,
    TContext
  >
) =>
  useMutation<
    AddNewPropertyMutation,
    TError,
    AddNewPropertyMutationVariables,
    TContext
  >(
    ["AddNewProperty"],
    (variables?: AddNewPropertyMutationVariables) =>
      fetcher<AddNewPropertyMutation, AddNewPropertyMutationVariables>(
        AddNewPropertyDocument,
        variables
      )(),
    options
  );
useAddNewPropertyMutation.getKey = () => ["AddNewProperty"];

export const AddUsersDocument = `
    mutation addUsers($role: String = "", $password: String = "", $name: String = "", $gender: String = "", $email: String = "") {
  insert_users(
    objects: {role: $role, password: $password, name: $name, gender: $gender, email: $email}
  ) {
    affected_rows
  }
}
    `;
export const useAddUsersMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    AddUsersMutation,
    TError,
    AddUsersMutationVariables,
    TContext
  >
) =>
  useMutation<AddUsersMutation, TError, AddUsersMutationVariables, TContext>(
    ["addUsers"],
    (variables?: AddUsersMutationVariables) =>
      fetcher<AddUsersMutation, AddUsersMutationVariables>(
        AddUsersDocument,
        variables
      )(),
    options
  );
useAddUsersMutation.getKey = () => ["addUsers"];

export const AddPropertyBookingsDocument = `
    mutation AddPropertyBookings($from_date: String = "", $people: String = "", $property_id: uuid = "", $status: String = "", $to_date: String = "", $user_id: uuid = "") {
  insert_bookings(
    objects: {from_date: $from_date, people: $people, property_id: $property_id, status: $status, to_date: $to_date, user_id: $user_id}
  ) {
    affected_rows
  }
}
    `;
export const useAddPropertyBookingsMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    AddPropertyBookingsMutation,
    TError,
    AddPropertyBookingsMutationVariables,
    TContext
  >
) =>
  useMutation<
    AddPropertyBookingsMutation,
    TError,
    AddPropertyBookingsMutationVariables,
    TContext
  >(
    ["AddPropertyBookings"],
    (variables?: AddPropertyBookingsMutationVariables) =>
      fetcher<
        AddPropertyBookingsMutation,
        AddPropertyBookingsMutationVariables
      >(AddPropertyBookingsDocument, variables)(),
    options
  );
useAddPropertyBookingsMutation.getKey = () => ["AddPropertyBookings"];

export const MakeUseraHostDocument = `
    mutation makeUseraHost($user_id: uuid = "", $name: String = "", $role: String = "") {
  insert_hosts(objects: {user_id: $user_id, name: $name}) {
    affected_rows
  }
  update_users(where: {UID: {_eq: $user_id}}, _set: {role: $role}) {
    affected_rows
  }
}
    `;
export const useMakeUseraHostMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    MakeUseraHostMutation,
    TError,
    MakeUseraHostMutationVariables,
    TContext
  >
) =>
  useMutation<
    MakeUseraHostMutation,
    TError,
    MakeUseraHostMutationVariables,
    TContext
  >(
    ["makeUseraHost"],
    (variables?: MakeUseraHostMutationVariables) =>
      fetcher<MakeUseraHostMutation, MakeUseraHostMutationVariables>(
        MakeUseraHostDocument,
        variables
      )(),
    options
  );
useMakeUseraHostMutation.getKey = () => ["makeUseraHost"];

export const RemoveBookingsWherebooking_IdDocument = `
    mutation removeBookingsWherebooking_id($booking_id: uuid = "") {
  delete_bookings(where: {BID: {_eq: $booking_id}}) {
    affected_rows
  }
}
    `;
export const useRemoveBookingsWherebooking_IdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    RemoveBookingsWherebooking_IdMutation,
    TError,
    RemoveBookingsWherebooking_IdMutationVariables,
    TContext
  >
) =>
  useMutation<
    RemoveBookingsWherebooking_IdMutation,
    TError,
    RemoveBookingsWherebooking_IdMutationVariables,
    TContext
  >(
    ["removeBookingsWherebooking_id"],
    (variables?: RemoveBookingsWherebooking_IdMutationVariables) =>
      fetcher<
        RemoveBookingsWherebooking_IdMutation,
        RemoveBookingsWherebooking_IdMutationVariables
      >(RemoveBookingsWherebooking_IdDocument, variables)(),
    options
  );
useRemoveBookingsWherebooking_IdMutation.getKey = () => [
  "removeBookingsWherebooking_id",
];

export const GetBookingsWhereUser_IdDocument = `
    query getBookingsWhereUser_id($user_id: uuid = "") {
  bookings(where: {user_id: {_eq: $user_id}}, order_by: {done_on: asc}) {
    user_id
    to_date
    status
    property {
      PID
      amenities
      bath
      beds
      cost
      description
      host_id
      image
      listed_on
      name
      per
      type
      hosts {
        name
        HID
      }
    }
    property_id
    people
    from_date
    done_on
    BID
  }
}
    `;
export const useGetBookingsWhereUser_IdQuery = <
  TData = GetBookingsWhereUser_IdQuery,
  TError = unknown
>(
  variables?: GetBookingsWhereUser_IdQueryVariables,
  options?: UseQueryOptions<GetBookingsWhereUser_IdQuery, TError, TData>
) =>
  useQuery<GetBookingsWhereUser_IdQuery, TError, TData>(
    variables === undefined
      ? ["getBookingsWhereUser_id"]
      : ["getBookingsWhereUser_id", variables],
    fetcher<
      GetBookingsWhereUser_IdQuery,
      GetBookingsWhereUser_IdQueryVariables
    >(GetBookingsWhereUser_IdDocument, variables),
    options
  );

useGetBookingsWhereUser_IdQuery.getKey = (
  variables?: GetBookingsWhereUser_IdQueryVariables
) =>
  variables === undefined
    ? ["getBookingsWhereUser_id"]
    : ["getBookingsWhereUser_id", variables];
export const GetAllHostsBookingsDocument = `
    query getAllHostsBookings($host_id: uuid = "") {
  bookings(
    where: {property: {host_id: {_eq: $host_id}}}
    order_by: {done_on: desc}
  ) {
    user_id
    to_date
    status
    property_id
    people
    from_date
    done_on
    BID
    property {
      PID
      amenities
      bath
      beds
      cost
      description
      host_id
      image
      listed_on
      name
      per
      type
      hosts {
        HID
        name
      }
      bookings {
        BID
        done_on
        from_date
        people
        property_id
        status
        to_date
        user_id
        users {
          UID
          email
          name
        }
      }
    }
    users {
      name
      UID
      email
    }
  }
}
    `;
export const useGetAllHostsBookingsQuery = <
  TData = GetAllHostsBookingsQuery,
  TError = unknown
>(
  variables?: GetAllHostsBookingsQueryVariables,
  options?: UseQueryOptions<GetAllHostsBookingsQuery, TError, TData>
) =>
  useQuery<GetAllHostsBookingsQuery, TError, TData>(
    variables === undefined
      ? ["getAllHostsBookings"]
      : ["getAllHostsBookings", variables],
    fetcher<GetAllHostsBookingsQuery, GetAllHostsBookingsQueryVariables>(
      GetAllHostsBookingsDocument,
      variables
    ),
    options
  );

useGetAllHostsBookingsQuery.getKey = (
  variables?: GetAllHostsBookingsQueryVariables
) =>
  variables === undefined
    ? ["getAllHostsBookings"]
    : ["getAllHostsBookings", variables];
export const GetAllPropertiesDocument = `
    query GetAllProperties {
  properties(order_by: {cost: asc}) {
    type
    per
    name
    listed_on
    image
    host_id
    description
    cost
    beds
    bath
    amenities
    PID
    hosts {
      HID
      name
      user {
        email
        name
      }
    }
    bookings {
      BID
      done_on
      from_date
      people
      property_id
      status
      to_date
      user_id
    }
  }
}
    `;
export const useGetAllPropertiesQuery = <
  TData = GetAllPropertiesQuery,
  TError = unknown
>(
  variables?: GetAllPropertiesQueryVariables,
  options?: UseQueryOptions<GetAllPropertiesQuery, TError, TData>
) =>
  useQuery<GetAllPropertiesQuery, TError, TData>(
    variables === undefined
      ? ["GetAllProperties"]
      : ["GetAllProperties", variables],
    fetcher<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>(
      GetAllPropertiesDocument,
      variables
    ),
    options
  );

useGetAllPropertiesQuery.getKey = (
  variables?: GetAllPropertiesQueryVariables
) =>
  variables === undefined
    ? ["GetAllProperties"]
    : ["GetAllProperties", variables];
export const GetUsersDocument = `
    query getUsers($email: String = "") {
  users(where: {email: {_eq: $email}}) {
    UID
    email
    gender
    name
    password
    role
    hosts {
      HID
      join_on
      name
      user_id
      properties {
        type
        per
        name
        listed_on
        host_id
        description
        cost
        beds
        bath
        PID
        amenities
        image
      }
    }
  }
}
    `;
export const useGetUsersQuery = <TData = GetUsersQuery, TError = unknown>(
  variables?: GetUsersQueryVariables,
  options?: UseQueryOptions<GetUsersQuery, TError, TData>
) =>
  useQuery<GetUsersQuery, TError, TData>(
    variables === undefined ? ["getUsers"] : ["getUsers", variables],
    fetcher<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables),
    options
  );

useGetUsersQuery.getKey = (variables?: GetUsersQueryVariables) =>
  variables === undefined ? ["getUsers"] : ["getUsers", variables];
export const UpdateBookingStatusDocument = `
    mutation updateBookingStatus($status: String = "", $booking_id: uuid = "") {
  update_bookings(where: {BID: {_eq: $booking_id}}, _set: {status: $status}) {
    affected_rows
  }
}
    `;
export const useUpdateBookingStatusMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateBookingStatusMutation,
    TError,
    UpdateBookingStatusMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateBookingStatusMutation,
    TError,
    UpdateBookingStatusMutationVariables,
    TContext
  >(
    ["updateBookingStatus"],
    (variables?: UpdateBookingStatusMutationVariables) =>
      fetcher<
        UpdateBookingStatusMutation,
        UpdateBookingStatusMutationVariables
      >(UpdateBookingStatusDocument, variables)(),
    options
  );
useUpdateBookingStatusMutation.getKey = () => ["updateBookingStatus"];

export const UpdatePropertyWherePropertyIdDocument = `
    mutation UpdatePropertyWherePropertyID($property_id: uuid = "", $amenities: jsonb = "", $bath: String = "", $beds: String = "", $cost: String = "", $description: String = "", $name: String = "", $per: String = "", $type: String = "", $image: String = "") {
  update_properties(
    where: {PID: {_eq: $property_id}}
    _set: {amenities: $amenities, bath: $bath, beds: $beds, cost: $cost, description: $description, name: $name, per: $per, type: $type, image: $image}
  ) {
    affected_rows
  }
}
    `;
export const useUpdatePropertyWherePropertyIdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdatePropertyWherePropertyIdMutation,
    TError,
    UpdatePropertyWherePropertyIdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdatePropertyWherePropertyIdMutation,
    TError,
    UpdatePropertyWherePropertyIdMutationVariables,
    TContext
  >(
    ["UpdatePropertyWherePropertyID"],
    (variables?: UpdatePropertyWherePropertyIdMutationVariables) =>
      fetcher<
        UpdatePropertyWherePropertyIdMutation,
        UpdatePropertyWherePropertyIdMutationVariables
      >(UpdatePropertyWherePropertyIdDocument, variables)(),
    options
  );
useUpdatePropertyWherePropertyIdMutation.getKey = () => [
  "UpdatePropertyWherePropertyID",
];

export const UpdateUserRoleWhereUser_IdDocument = `
    mutation updateUserRoleWhereUser_id($user_id: uuid = "", $role: String = "") {
  update_users(where: {UID: {_eq: $user_id}}, _set: {role: $role}) {
    affected_rows
  }
}
    `;
export const useUpdateUserRoleWhereUser_IdMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    UpdateUserRoleWhereUser_IdMutation,
    TError,
    UpdateUserRoleWhereUser_IdMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateUserRoleWhereUser_IdMutation,
    TError,
    UpdateUserRoleWhereUser_IdMutationVariables,
    TContext
  >(
    ["updateUserRoleWhereUser_id"],
    (variables?: UpdateUserRoleWhereUser_IdMutationVariables) =>
      fetcher<
        UpdateUserRoleWhereUser_IdMutation,
        UpdateUserRoleWhereUser_IdMutationVariables
      >(UpdateUserRoleWhereUser_IdDocument, variables)(),
    options
  );
useUpdateUserRoleWhereUser_IdMutation.getKey = () => [
  "updateUserRoleWhereUser_id",
];

export const ValidateAvailablePropertiesDocument = `
    query ValidateAvailableProperties($property_id: uuid = "") {
  bookings(where: {property_id: {_eq: $property_id}}) {
    BID
    done_on
    from_date
    property_id
    status
    to_date
  }
}
    `;
export const useValidateAvailablePropertiesQuery = <
  TData = ValidateAvailablePropertiesQuery,
  TError = unknown
>(
  variables?: ValidateAvailablePropertiesQueryVariables,
  options?: UseQueryOptions<ValidateAvailablePropertiesQuery, TError, TData>
) =>
  useQuery<ValidateAvailablePropertiesQuery, TError, TData>(
    variables === undefined
      ? ["ValidateAvailableProperties"]
      : ["ValidateAvailableProperties", variables],
    fetcher<
      ValidateAvailablePropertiesQuery,
      ValidateAvailablePropertiesQueryVariables
    >(ValidateAvailablePropertiesDocument, variables),
    options
  );

useValidateAvailablePropertiesQuery.getKey = (
  variables?: ValidateAvailablePropertiesQueryVariables
) =>
  variables === undefined
    ? ["ValidateAvailableProperties"]
    : ["ValidateAvailableProperties", variables];
