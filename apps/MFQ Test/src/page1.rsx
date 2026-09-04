<Screen
  id="page1"
  _customShortcuts={[]}
  _hashParams={[]}
  _order={0}
  _searchParams={[]}
  browserTitle=""
  title="Page 1"
  urlSlug=""
  uuid="64e017e4-168e-41ea-85e1-5e10efa92c97"
>
  <SqlQueryUnified
    id="getUsers"
    notificationDuration={4.5}
    query={include("../lib/getUsers.sql", "string")}
    resourceDisplayName="Postgres DB"
    resourceName="27ec0afa-190d-4233-92cf-4b76ee09511e"
    runWhenModelUpdates={false}
    runWhenPageLoads={true}
    showSuccessToaster={false}
    showUpdateSetValueDynamicallyToggle={false}
    updateSetValueDynamically={true}
    warningCodes={[]}
  />
  <SqlQueryUnified
    id="updateUser"
    actionType="UPDATE_BY"
    changeset={
      '[{"key":"first_name","value":"{{ usersTable.selectedRow.first_name }}"}]'
    }
    changesetObject="{{ usersTable.selectedRow }}"
    editorMode="gui"
    filterBy={
      '[{"key":"id","value":"{{ usersTable.selectedRow.id }}","operation":"="}]'
    }
    isMultiplayerEdited={false}
    resourceDisplayName="Postgres DB"
    resourceName="27ec0afa-190d-4233-92cf-4b76ee09511e"
    runWhenModelUpdates={false}
    tableName="sf_users"
  />
  <Frame
    id="$main"
    enableFullBleed={false}
    isHiddenOnDesktop={false}
    isHiddenOnMobile={false}
    padding="8px 12px"
    type="main"
  >
    <Text
      id="text1"
      horizontalAlign="center"
      value="# Hello {{ current_user.firstName }}!"
      verticalAlign="center"
    />
    <Button id="button1" text="Important Business Button">
      <Event
        id="e947df77"
        event="click"
        method="confetti"
        params={{}}
        pluginId=""
        type="util"
        waitMs="0"
        waitType="debounce"
      />
    </Button>
  </Frame>
</Screen>
