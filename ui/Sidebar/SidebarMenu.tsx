import { BoardSummarySidebar } from "@/types/types";
import { IconCalendar, IconLayoutKanban, IconPencilBolt, IconTools, IconUser } from "@tabler/icons-react";
import { Sidebar, Menu, SubMenu, MenuItem } from "./SidebarComponent";

export default function SidebarMenu({ boards }: { boards: BoardSummarySidebar[] }) {
  return (
    <Sidebar>
      <Menu>
        <MenuItem path="/board" title="Team" icon={<IconLayoutKanban size={18} />} />
        {/* <SubMenu title="Team" defaultOpen icon={<IconLayoutKanban size={18} />}>
          <MenuItem path="/board" title="New" icon={<IconPencilBolt size={18} />} />
          {boards.map((boardMember) => (
            <MenuItem
              key={boardMember.board.id}
              path={`/board/${boardMember.board.id}`}
              title={boardMember.board.title}
            />
          ))}
        </SubMenu> */}
        <MenuItem path="/calendar" title="Calendar" icon={<IconCalendar size={18} />} />
        <SubMenu title="Experimental" defaultOpen icon={<IconTools size={18} />}>
          {/* <MenuItem path="/products" title="Users" /> */}
          <MenuItem path="/notes" title="Notes" />
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}
