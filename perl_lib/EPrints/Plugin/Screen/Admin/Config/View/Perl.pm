=head1 NAME

EPrints::Plugin::Screen::Admin::Config::View::Perl

=cut

package EPrints::Plugin::Screen::Admin::Config::View::Perl;

use EPrints::Plugin::Screen::Admin::Config::View;

@ISA = ( 'EPrints::Plugin::Screen::Admin::Config::View' );

use strict;

sub can_be_viewed
{
	my( $self ) = @_;

	return $self->allow( "config/view/perl" );
}

1;

=head1 COPYRIGHT

=for COPYRIGHT BEGIN

Copyright 2017 University of Southampton.
EPrints 3.4 is supplied by EPrints Services.

This software may be used with permission and must not be redistributed.
http://www.eprints.org/eprints-3.4/

=for COPYRIGHT END

=for LICENSE BEGIN

This file is part of EPrints 3.4 L<http://www.eprints.org/>.

EPrints 3.4 and this file are released under the terms of the
GNU Lesser General Public License version 3 as published by
the Free Software Foundation unless otherwise stated.

EPrints 3.4 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with EPrints 3.4.
If not, see L<http://www.gnu.org/licenses/>.

=for LICENSE END

