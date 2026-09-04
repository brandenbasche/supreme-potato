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
