import { BoardSummarySidebar } from "@/types/types";
import { IconCalendar, IconLayoutKanban, IconTools, IconUser } from "@tabler/icons-react";
import { Sidebar, Menu, SubMenu, MenuItem } from "./SidebarComponent";

export default function SidebarMenu({ boards }: { boards: BoardSummarySidebar[] }) {
  return (
    <Sidebar>
      <Menu>
        <SubMenu title="Projects" defaultOpen icon={<IconLayoutKanban size={18} />}>
          <MenuItem path="/board" title="All Projects" />
          {boards.map((boardMember) => (
            <MenuItem
              key={boardMember.board.id}
              path={`/board/${boardMember.board.id}`}
              title={boardMember.board.title}
            />
          ))}
        </SubMenu>
        <MenuItem path="/calendar" title="Calendar" icon={<IconCalendar size={18} />} />
        <MenuItem path="/setting" title="Setting" icon={<IconTools size={18} />} />
      </Menu>
    </Sidebar>
  );
}
